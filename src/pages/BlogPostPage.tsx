import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { getBlogPost, getRecentPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import StructuredData from "@/components/StructuredData";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;
  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <div>
      <StructuredData 
        type="blog" 
        pageTitle={`${post.title} | Dr. Hamid's Physio Clinic`}
        pageDescription={post.excerpt}
      />
      {/* Hero Section */}
      <section className="border-b border-border bg-sand-50 py-12 md:py-16">
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
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-700">
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
      <section className="py-8 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:my-6 prose-ul:space-y-2
                prose-li:text-gray-700
                prose-a:text-relish-600 prose-a:no-underline hover:prose-a:underline
                prose-table:border-collapse prose-table:w-full
                prose-th:bg-relish-50 prose-th:p-3 prose-th:text-left prose-th:font-semibold
                prose-td:border prose-td:border-gray-200 prose-td:p-3"
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
                      <div className="text-sm text-gray-600 mb-2">{relatedPost.date}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
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
              Book a consultation at Dr. Hamid's Physio Clinic in Manikonda and experience expert physiotherapy care.
            </p>
            <Link to="/#appointment">
              <Button className="bg-white text-relish-700 hover:bg-gray-100 px-8 py-3 font-medium text-lg">
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;