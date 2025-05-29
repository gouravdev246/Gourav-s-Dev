"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Wand2, Copy } from "lucide-react";
import { handleRewriteContent } from "@/app/actions/aiActions";
import type { RewriteContentToneInput } from "@/ai/flows/rewrite-content-tone";

const formSchema = z.object({
  content: z.string().min(10, "Content must be at least 10 characters.").max(2000, "Content must be at most 2000 characters."),
  tone: z.enum(["professional", "casual"]),
  targetAudience: z.string().max(100, "Target audience must be at most 100 characters.").optional(),
});

type ToneAIFormValues = z.infer<typeof formSchema>;

export function ToneAIForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rewrittenContent, setRewrittenContent] = useState<string | null>(null);

  const form = useForm<ToneAIFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
      tone: "professional",
      targetAudience: "",
    },
  });

  async function onSubmit(values: ToneAIFormValues) {
    setIsSubmitting(true);
    setRewrittenContent(null);

    const input: RewriteContentToneInput = {
      content: values.content,
      tone: values.tone,
      targetAudience: values.targetAudience || undefined,
    };

    try {
      const result = await handleRewriteContent(input);
      if ("rewrittenContent" in result) {
        setRewrittenContent(result.rewrittenContent);
        toast({
          title: "Content Rewritten!",
          description: "Your content has been successfully rewritten.",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to rewrite content.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Tone AI form submission error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const copyToClipboard = () => {
    if (rewrittenContent) {
      navigator.clipboard.writeText(rewrittenContent)
        .then(() => {
          toast({ title: "Copied!", description: "Rewritten content copied to clipboard." });
        })
        .catch(err => {
          toast({ title: "Copy Failed", description: "Could not copy text.", variant: "destructive" });
          console.error('Failed to copy: ', err);
        });
    }
  };


  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Rewrite Your Content</CardTitle>
          <CardDescription>Adjust the tone of your text to suit your needs using AI.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="content">Original Content</Label>
              <Textarea
                id="content"
                placeholder="Enter the text you want to rewrite..."
                {...form.register("content")}
                rows={8}
                className="mt-1"
              />
              {form.formState.errors.content && (
                <p className="text-sm text-destructive mt-1">{form.formState.errors.content.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="tone">Desired Tone</Label>
              <Controller
                name="tone"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="tone" className="mt-1">
                      <SelectValue placeholder="Select a tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div>
              <Label htmlFor="targetAudience">Target Audience (Optional)</Label>
              <Input
                id="targetAudience"
                placeholder="e.g., Tech Executives, Young Adults"
                {...form.register("targetAudience")}
                className="mt-1"
              />
               {form.formState.errors.targetAudience && (
                <p className="text-sm text-destructive mt-1">{form.formState.errors.targetAudience.message}</p>
              )}
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Rewriting...
                </>
              ) : (
                <>
                  Rewrite with AI <Wand2 className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Rewritten Content</CardTitle>
          <CardDescription>The AI-generated version of your text will appear here.</CardDescription>
        </CardHeader>
        <CardContent className="relative">
          {isSubmitting && !rewrittenContent && (
             <div className="absolute inset-0 flex items-center justify-center bg-background/50 rounded-b-lg">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
             </div>
          )}
          <Textarea
            value={rewrittenContent || ""}
            readOnly
            placeholder="Rewritten content will appear here..."
            rows={12}
            className="bg-muted/50"
          />
        </CardContent>
        {rewrittenContent && (
          <CardFooter>
            <Button variant="outline" onClick={copyToClipboard} className="w-full">
              <Copy className="mr-2 h-4 w-4" /> Copy to Clipboard
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
