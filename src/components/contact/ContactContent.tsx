import { ContactForm } from './ContactForm';
import { SOCIAL_LINKS } from '@/constants/site';
import Link from 'next/link';
import { SectionWrapper, SectionHeader } from '@/components/ui/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin } from 'lucide-react'; // Added MapPin as an example

export function ContactContent() {
  return (
    <SectionWrapper>
      <SectionHeader
        title="Get In Touch"
        subtitle="Have a project in mind, a question, or just want to connect? Feel free to reach out."
      />
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
        
        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a href="mailto:gourav@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    gourav@example.com {/* Replace with actual email */}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">
                    Somewhere in the Digital Universe {/* Replace with actual location if desired */}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Connect Online</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                  aria-label={`Connect on ${social.name}`}
                >
                  <social.icon className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-md">{social.name}</span>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
