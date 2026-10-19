import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, ShieldAlert } from "lucide-react";
import { getBlogPost, getRecentPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import StructuredData from "@/components/StructuredData";
import { Helmet } from "react-helmet";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;
  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const isKneeStairsArticle = post.slug === "knee-pain-when-climbing-stairs";
  const canonicalUrl = `https://hamidphysio.lovable.app/blogs/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: post.title,
    description: post.excerpt,
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Dr. Hamid's Physio and Pain Clinic" },
    mainEntityOfPage: canonicalUrl,
    about: { "@type": "MedicalCondition", name: "Knee pain" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      ["Is knee pain while climbing stairs normal?", "Occasional discomfort does not automatically mean serious damage, but persistent or recurring pain deserves attention, particularly when it affects daily activities."],
      ["Why does my knee hurt going downstairs?", "Descending requires substantial eccentric control from the quadriceps and places considerable demand on the knee. Several conditions can produce pain during this movement."],
      ["Can physiotherapy help knee pain?", "Physiotherapy may help many musculoskeletal knee problems through assessment, education, exercise, and progressive rehabilitation. Appropriate care depends on the underlying cause."],
      ["Do I need an MRI for knee pain on stairs?", "Not necessarily. Imaging decisions depend on clinical history, examination, and whether imaging is likely to change management."],
    ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
  };

  return (
    <div>
      <StructuredData 
        type="blog" 
        pageTitle={`${post.title} | Dr. Hamid's Physio and Pain Clinic`}
        pageDescription={post.excerpt}
      />
      {isKneeStairsArticle && (
        <Helmet>
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={canonicalUrl} />
          <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
      )}
      {/* Hero Section */}
      <section className="border-b border-border bg-sand-50 py-8 md:py-14">
        <div className="container">
          <Link to="/blogs">
            <Button variant="outline" className="mb-6 border-relish-600 text-relish-600 hover:bg-relish-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <div className="mb-4">
              <span className="bg-relish-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-foreground leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-card py-5 md:py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <figure className="overflow-hidden rounded-md border border-border bg-muted">
              <img 
                src={post.imageUrl} 
                alt={`${post.title} - Dr. Hamid's Physio and Pain Clinic`}
                className="aspect-[5/4] w-full object-cover sm:aspect-[16/9]"
                width="1000"
                height="800"
                fetchPriority="high"
              />
              {isKneeStairsArticle && <figcaption className="px-4 py-3 text-sm text-muted-foreground">Knee pain during stair climbing is common and can have several underlying causes.</figcaption>}
            </figure>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="bg-card py-8 md:py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {isKneeStairsArticle && (
              <div className="mb-8 flex items-start gap-3 border-l-4 border-wellness-600 bg-wellness-50 p-4 text-sm leading-relaxed text-foreground sm:text-base">
                <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-wellness-700" aria-hidden="true" />
                <p><strong>Quick safety note:</strong> A locked knee, inability to bear weight, major trauma, marked swelling, or a hot red knee with fever needs prompt medical evaluation.</p>
              </div>
            )}
            <article 
              className="blog-article prose max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-relish-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {recentPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blogs/${relatedPost.slug}`}
                    className="bg-card border border-border rounded-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={relatedPost.imageUrl} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">{relatedPost.date}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-relish-800 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Recovery Journey?</h2>
            <p className="text-lg mb-8 text-white/90">
              Book a consultation at Dr. Hamid's Physio and Pain Clinic in Manikonda and experience expert physiotherapy care.
            </p>
            <Link to="/#appointment">
              <Button className="bg-card text-relish-700 hover:bg-muted px-8 py-3 font-medium text-lg">
                Book an Appointment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;