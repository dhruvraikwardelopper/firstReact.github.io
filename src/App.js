function App(){
    return(<>
    <div className="w-3/4 m-auto">
        <div className="mt-20">
            {data.map((d)=>{
                <div>
                    <div>
                        <img src={d.image} alt={d.name}/>
                    </div>
                    <div>


                    </div>
                </div>

            })}
        </div>
    </div>
    </>)
}



const data =[
  {
    "name": "Priya Sharma",
    "image": "priya.jpg",
    "review": "Joining this platform has completely changed my perspective on earning extra income. The support from the community is outstanding and the training materials helped me get started with ease. I see real growth in my network and finances every month."
  },
  {
    "name": "Rohan Mehta",
    "image": "rohan.jpg",
    "review": "The dashboard design is simple and convenient for tracking both my performance and my team’s progress. Payments have always been on time, which builds trust. I appreciate how responsive the support staff is whenever I have a query."
  },
  {
    "name": "Anjali Kumari",
    "image": "anjali.jpg",
    "review": "I was hesitant about MLM before, but this company is so transparent with their processes. Everything is clearly documented and accessible. The consistent communication helps me stay motivated and updated about the latest opportunities."
  },
  {
    "name": "Amit Patel",
    "image": "amit.jpg",
    "review": "The step-by-step training sessions made joining as a newcomer completely hassle-free. I quickly learned not just about the products but also about growing my network effectively. The encouragement from mentors is genuine and ongoing."
  },
  {
    "name": "Sunita Joshi",
    "image": "sunita.jpg",
    "review": "One of the best features is the timely profit payouts every cycle. I love how innovative and high-quality the product line is! My team is growing every month thanks to the excellent resources available."
  },
  {
    "name": "Rahul Sinha",
    "image": "rahul.jpg",
    "review": "The rewards and incentives given through this program are a true motivator for my performance. Regular webinars help me learn new strategies and grow as a leader. Networking with others in this space is rewarding and educational."
  },
  {
    "name": "Sneha Desai",
    "image": "sneha.jpg",
    "review": "Personalized mentoring has been the key to my successful journey with this platform. The community is always active in supporting each other’s goals. I feel connected and valued as part of this network."
  },
  {
    "name": "Vikram Singh",
    "image": "vikram.jpg",
    "review": "The compensation plan is exceptionally well-structured for ambitious individuals. As I have reached new levels, I have seen my efforts rewarded generously. Team collaboration is encouraged at every step of the journey."
  },
  {
    "name": "Neha Bansal",
    "image": "neha.jpg",
    "review": "I love receiving regular recognition for my contributions and sales achievements. Consistent communication from the admin team makes me feel updated and supported. These factors inspire me to keep raising the bar every month."
  },
  {
    "name": "Arjun Nair",
    "image": "arjun.jpg",
    "review": "I have always found the brand to be trustworthy and reliable. The opportunities here are ideal for entrepreneurs like me who want flexible and rewarding careers. The platform’s resources have been a huge help in building my business."
  }
]
