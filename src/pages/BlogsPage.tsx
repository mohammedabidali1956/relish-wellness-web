import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

import StructuredData from "@/components/StructuredData";

const BlogsPage = () => {
  return (
    <div>
      <StructuredData 
        type="blog" 
        pageTitle="Health & Wellness Blog | Dr. Hamid's Physio Clinic Manikonda" 
        pageDescription="Expert physiotherapy advice and health tips from Dr. Hamid's Physio Clinic in Manikonda, Hyderabad. Learn about pain management, rehabilitation, and wellness."
      />
      {/* Hero Section */}
      <section className="border-b border-border bg-sand-50 py-14 md:py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
              Health & Wellness <span className="text-relish-700">Insights</span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
              Expert advice, research-backed information, and practical tips from Dr. Hamid's Physio Clinic to help you live pain-free and stay healthy.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-card border border-border rounded-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-relish-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    
                    <Link to={`/blogs/${post.slug}`}>
                      <Button variant="link" className="text-relish-600 hover:text-relish-700 p-0 h-auto font-semibold">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-relish-800 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Have Questions About Your Health?</h2>
            <p className="text-lg mb-8 text-white/90">
              Schedule a consultation with Dr. Mohammed Hamid Ali at our Manikonda clinic and get personalized care for your recovery.
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

export default BlogsPage;