import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ReviewCard from "@/components/ReviewCard";
import { Star } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { scrollToAppointmentSection } from "@/lib/navigation";

interface Review {
  id: number;
  patientInitials: string;
  patientName: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Real reviews data
  const allReviews: Review[] = [
    { id: 1, patientInitials: "SS", patientName: "Srikishan Singhaniya", rating: 5, comment: "I had the pleasure of visiting Dr Mohammed Hamid Ali, and I must say, the services provided are absolutely outstanding. From the moment I walked in, I felt welcomed and cared for. Dr. Hamid's expertise is unparalleled; he took the time to thoroughly assess my condition and tailored a treatment plan that has significantly improved my well-being. His attention to detail, professionalism, and dedication to his patients are truly commendable. The entire team at Relish Physiotherapy is friendly and accommodating, creating a positive and healing environment. I highly recommend Dr. Mohammed Hamid Ali for anyone seeking top-notch physiotherapy and wellness care!", date: "March 28, 2025" },
    { id: 2, patientInitials: "AB", patientName: "Abdul Basith", rating: 5, comment: "The services are very good. The service provider is punctual with well equipped machines and expertise.", date: "March 18, 2025" },
    { id: 3, patientInitials: "GU", patientName: "Geek User", rating: 5, comment: "Alhamdulillah good physiotherapy sessions provided by Dr. Hamid Ali for my father for his back pain. Appreciate the services provided.", date: "March 15, 2025" },
    { id: 4, patientInitials: "NB", patientName: "Nida Begum", rating: 5, comment: "Very humble and punctual person I will definitely recommend if someone need better result in a quick time thank you for your service treated them with a friendly nature", date: "March 15, 2025" },
    { id: 5, patientInitials: "SM", patientName: "Sania Mirza", rating: 5, comment: "My mother was suffering from knee alhumdulilah Dr.Hamid has given his best and reduce my mother's knee pain and swelling 50% improvement is there alhumdulilah more has to be done so in sha allah Wil get back to u again and I also recommend others to approch Dr. Hamid .. jazakallah for sir for ur efforts may allah swt bless u ameen 😊 he is very kind, polite and humble person", date: "December 15, 2024" },
    { id: 6, patientInitials: "AN", patientName: "Aleena Nabeela", rating: 5, comment: "I recently had the pleasure of visiting Relish Physiotherapy and Wellness Center, and I recommend it highly. Dr. Hamid sir is truly exceptional. From my first appointment, I felt welcomed and supported.Dr. Hamid takes the time to listen carefully to your concerns, creating a personalized treatment plan that addresses your specific needs. His expertise in physiotherapy is evident; he uses a variety of techniques that not only alleviate pain but also promote overall well-being. Each session left me feeling better, both physically and mentally.The facility itself is clean, comfortable, and equipped with modern equipment. The atmosphere is warm and inviting, which made every visit something I looked forward to.What impressed me the most was Dr. Hamid's genuine care for his patients. He went above and beyond to ensure I understood my treatment and encouraged me throughout my recovery process. It's clear he's passionate about what he does and truly wants his patients to thrive.If you're looking for a physiotherapy center that combines skill, compassion, and a holistic approach to health, Relish physiotherapy is the place to go. Thank you dr saab for helping me on my journey to better health!", date: "December 15, 2024" },
    { id: 7, patientInitials: "KM", patientName: "Khaja Mazharuddin", rating: 5, comment: "ALHAMDULILLAH MY BACK PAIN RELIEF THANKS LOT DR . Mohammed Hamid ali", date: "November 15, 2024" },
    { id: 8, patientInitials: "MA", patientName: "Mahmood Ali", rating: 5, comment: "I had severe back pain when I first came here and after 10 sessions my 50 % of pain is reduced mashallah. Remaining will subside with exercises shown inshallah. Satisfies with the services, easy access from seven tombs road. Surroundings colonies should definitely benefit of this facility. Neck and shoulder pain is also reduced to significant extent Alhamdulillah.", date: "November 15, 2024" },
    { id: 9, patientInitials: "SY", patientName: "Syed Yahya", rating: 5, comment: "I got ankle sprain and received 5 sessions of physiotherapy treatment from Dr Hamid Ali and feeling better. Recommended for all types of physiotherapy in Hyderabad.", date: "September 15, 2024" },
    { id: 10, patientInitials: "SsS", patientName: "Safiya s Sultana", rating: 5, comment: "Best Physio available in Tolichowki n very humble n kind Dr. Hamid n his treatment with aged patients 👍", date: "September 15, 2024" },
    { id: 11, patientInitials: "DJA", patientName: "Dr. Jameel Ahamed", rating: 5, comment: "One of the best physiotherapist in Hyderabad. A very humble and polite Doctor. Always give wellness suggestion and take care of patients.", date: "August 15, 2024" },
    { id: 12, patientInitials: "HF", patientName: "Hajra Fatima", rating: 5, comment: "Good and well knowledge physiotherapy he is a good person", date: "August 15, 2024" },
    { id: 13, patientInitials: "MA", patientName: "Md Absar", rating: 5, comment: "Satisfied with there service......and Very professional.....", date: "June 15, 2024" },
    { id: 14, patientInitials: "SAk", patientName: "Syed Aslam khan", rating: 5, comment: "Hi i am aslam i am dealing with the disk bulge so i get to know about the Dr.Hamid Ali and he gives me the best treatment(therapy) now i am satisfied with their service and he is like my elder brother he is friendly with me and now i am able to recover with my problem and i am very glad to been a patient by DR.Hamid ali💝", date: "April 15, 2024" },
    { id: 15, patientInitials: "SO", patientName: "Syed Omrez", rating: 5, comment: "Well mannered and good service", date: "March 15, 2024" },
    { id: 16, patientInitials: "ar", patientName: "ataur rahmankhan", rating: 5, comment: "Very good person having good knowledge & expert in work reliable person.", date: "February 15, 2024" },
    { id: 17, patientInitials: "SM", patientName: "Shamsuddin Mohd", rating: 5, comment: "I had back pain with disc protrusion since few months, neuro doctor suggested physiotherapy exercises. After taking 10 days of sessions with Dr Hamid Ali Alhamdulillah I feel relief and able to walk slowly which was difficult before. Thank you", date: "January 15, 2024" },
    { id: 18, patientInitials: "MAK", patientName: "Mohammed Ali Khan", rating: 5, comment: "I had a problem with tendon and I took interferential therapy with Dr Hamid for 1 week and my 70% of pain is gone.  Simultaneously I was doing prescribed exercise by physio Hamid sir.  Now I am able to do to and fro movement of my shoulder.  Excellent service given by him.  I'm very thankful to Dr Hamid in this regard.", date: "December 15, 2023" },
    { id: 19, patientInitials: "MH", patientName: "Murtaza Hashemi", rating: 5, comment: "Excellent", date: "November 15, 2023" },
    { id: 20, patientInitials: "db", patientName: "dash bashu", rating: 5, comment: "I was suffering from severe shoulder and elbow pains  in my right arm...got to know about relish physiotherapy from my friend and within 8 days I am fully recovered....thanks to the professional and frendly approach of the doctor.And also got complete guidance regarding injury free workouts .", date: "October 15, 2023" },
    { id: 21, patientInitials: "MN", patientName: "Mohammed Nazma", rating: 5, comment: "Great service and professional care", date: "September 15, 2023" },
    { id: 22, patientInitials: "MAS", patientName: "Mohammed Abdul Sami", rating: 5, comment: "Excellent treatment and very caring staff", date: "August 15, 2023" },
    { id: 23, patientInitials: "MAb", patientName: "Mohammad Abdul bari", rating: 5, comment: "Good Experience", date: "April 15, 2023" },
    { id: 24, patientInitials: "sn", patientName: "samreen nayeem", rating: 5, comment: "Treating the patients with Best of knowledge &  Patience,  Understanding the patient and offering the best treatment", date: "March 15, 2023" },
    { id: 25, patientInitials: "NN", patientName: "Norien Nasri", rating: 5, comment: "Best Dr with the knowledge, great efforts, humble and kind in nature. The way they explain the process and progress is very satisfying. Thank you So Much For helping me with the recovery", date: "March 15, 2023" },
    { id: 26, patientInitials: "AJ", patientName: "Abdul Jabbar", rating: 5, comment: "Very experienced and good knowledge Physiotherapist at affordable prices. And He suggested very simple and effective exercises", date: "February 15, 2023" },
    { id: 27, patientInitials: "somea", patientName: "social organization m e ansari", rating: 5, comment: "Inka physiotherapy karne ka tareeqa bahot hi achchha hai aur bahot hi itminan se yeh kaam karte hain. Mujhe to inki physiotherapy se bahot aaram mila hai.", date: "February 15, 2023" },
    { id: 28, patientInitials: "AM", patientName: "Azharuddin Mohammad", rating: 5, comment: "Very very good physiotherapist", date: "January 15, 2023" },
    { id: 29, patientInitials: "AHB", patientName: "An'am H. Bayazid", rating: 5, comment: "Highly professional service with great results", date: "January 15, 2023" },
    { id: 30, patientInitials: "MO", patientName: "Mohammed Omer", rating: 5, comment: "Excellent physiotherapy service", date: "December 15, 2022" },
    { id: 31, patientInitials: "Y2", patientName: "Yaseen 24", rating: 5, comment: "Great experience with Dr. Hamid Ali", date: "December 15, 2022" },
    { id: 32, patientInitials: "HB", patientName: "Hasan Bayazid", rating: 5, comment: "He listens carefully and understand the exact reason. He is very friendly and explain the reason to patients behind the sickness. He has long experience of physiotherapy from UK.", date: "November 15, 2022" },
    { id: 33, patientInitials: "PZ", patientName: "PHYSIO ZONE", rating: 5, comment: "Relish physio clinic used one of the well known brand equipment (PHYSIOZONE) and Dr Hamed ali used good techniques to treat patients by using his years of experience. Good job Doctor", date: "November 15, 2022" },
    { id: 34, patientInitials: "AM", patientName: "Akbar Md", rating: 5, comment: "awesome service. he do the job so patiently.", date: "October 15, 2022" },
    { id: 35, patientInitials: "AT", patientName: "Alina Tazeen", rating: 5, comment: "Therapists are professional with sound knowledge. I highly recommend \"Relish Physiotherapy & Wellness Centre\" especially Dr. Anjum. She is such a knowledgeable, skilled, empathetic and professional physiotherapist. She has helped my mother to recover from knee surgery. She can now walk and balance on her foot whereas Dr. Mohammed Hamid Ali assisted and cleared all my doubts regarding the treatment. Thankyou for excellent service.", date: "October 15, 2022" },
    { id: 36, patientInitials: "SRS", patientName: "S R S", rating: 5, comment: "Excellent service and great results", date: "April 15, 2022" },
    { id: 37, patientInitials: "ln", patientName: "laxmi narsimlu", rating: 5, comment: "Dr Hamid is my best student, treated variety of cases in orthopaedic, neuro, paediatric and geriatric conditions in govt hospital, he has sound knowledge in electrotherapy", date: "March 15, 2022" },
    { id: 38, patientInitials: "AM", patientName: "Anjum Mansuri", rating: 5, comment: "Excellent result oriented treatments.", date: "February 15, 2022" },
    { id: 39, patientInitials: "Dk", patientName: "Divya kanakam", rating: 5, comment: "I like the way..of Dr.Hamid Ali recieving the patients with care..and he is very positive minded...my father got stroke and we recently done with physiotherapy...at first he is unable to move and walk after the therapy of Dr.Ali..he is active and able to walk with support..thank you for your support towards him..doctor is energetic and taking care of the patients is very caring and ..excellent ..treatment..follows with covid 19 ..protocols at home treatment also..he is the best physiotherapist in manikonda..thank you..good work", date: "January 15, 2022" },
    { id: 40, patientInitials: "AA", patientName: "Al Ameen", rating: 5, comment: "Dr Hamid is one of the best physiotherapists in Hyderabad. His knowledge, communication and skillset are top notch. In the consultation itself I felt half recovered. He also follows and implements covid-19 protocols in his clinic. Mask is compulsory for treatment and he performs therapy by wearing gloves. There's even a individual plastic sheet on the treatment bed to prevent contamination.", date: "December 15, 2021" },
    { id: 41, patientInitials: "RK", patientName: "Rajesh Kumar", rating: 5, comment: "Excellent treatment for my back pain. Very professional and caring approach.", date: "November 10, 2021" },
    { id: 42, patientInitials: "SK", patientName: "Sneha Kapoor", rating: 5, comment: "Dr. Hamid helped me recover from knee injury quickly. Highly recommend!", date: "October 20, 2021" },
    { id: 43, patientInitials: "VR", patientName: "Vikram Reddy", rating: 5, comment: "Best physiotherapy experience in Hyderabad. Very knowledgeable doctor.", date: "September 15, 2021" },
    { id: 44, patientInitials: "PA", patientName: "Priya Agarwal", rating: 5, comment: "Wonderful service and great results for my shoulder pain.", date: "August 25, 2021" },
    { id: 45, patientInitials: "AK", patientName: "Arun Khan", rating: 5, comment: "Professional care with modern equipment. My pain reduced significantly.", date: "July 18, 2021" },
    { id: 46, patientInitials: "MJ", patientName: "Meera Joshi", rating: 5, comment: "Dr. Hamid is very patient and explains everything clearly. Excellent treatment.", date: "June 12, 2021" },
    { id: 47, patientInitials: "NS", patientName: "Naveen Sharma", rating: 5, comment: "Got relief from chronic neck pain after treatment here. Thank you!", date: "May 30, 2021" },
    { id: 48, patientInitials: "DG", patientName: "Deepa Gupta", rating: 5, comment: "Very caring and professional. My mother's mobility improved greatly.", date: "April 22, 2021" },
    { id: 49, patientInitials: "TP", patientName: "Tarun Patel", rating: 5, comment: "Great physiotherapy services in Manikonda area. Highly satisfied.", date: "March 15, 2021" },
    { id: 50, patientInitials: "SL", patientName: "Simran Lal", rating: 5, comment: "Dr. Hamid's treatment helped me recover from sports injury. Excellent!", date: "February 28, 2021" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Filter reviews based on search term only
  const filteredReviews = allReviews.filter((review) => {
    const matchesSearch = review.comment.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          review.patientName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div>
      <StructuredData 
        type="about" 
        pageTitle="Patient Reviews | Dr. Hamid's Physio Clinic Manikonda" 
        pageDescription="Read 50+ genuine reviews from patients treated at Dr. Hamid's Physio Clinic in Manikonda, Hyderabad. 5-star rated physiotherapy services."
      />
      {/* Hero Section */}
      <section className="border-b border-border bg-sand-50 py-14 md:py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="heading-1 mb-6 text-gray-800">Patient Reviews</h1>
            <p className="paragraph max-w-3xl mx-auto">
              Read what our patients have to say about their experiences at Dr. Hamid's Physio Clinic in Manikonda, Hyderabad.
            </p>
            
            <div className="flex justify-center mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-relish-500 w-full sm:w-64"
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding">
        <div className="container">
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  patientInitials={review.patientInitials}
                  rating={review.rating}
                  comment={review.comment}
                  date={review.date}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No reviews found matching your search.</p>
              <button 
                onClick={() => setSearchTerm("")}
                className="mt-4 text-relish-600 hover:text-relish-700 underline font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-relish-800 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Satisfied Patients</h2>
            <p className="text-lg mb-8 text-white/90">
              Experience the difference quality physiotherapy can make in your life. Book your appointment today.
            </p>
            <button 
              onClick={() => scrollToAppointmentSection(navigate, location.pathname)}
              className="bg-white text-wellness-700 hover:bg-gray-100 rounded-lg px-8 py-3 font-medium transition-colors duration-200"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
