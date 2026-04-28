import React, { useState } from 'react';
import { Calendar, ArrowRight, Tag, X } from 'lucide-react';

const WeeklyJourney = () => {
  const [selectedEntry, setSelectedEntry] = useState(null);

  const entries = [
    {
      id: 1,
      week: "Week 1",
      title: "Orientation and Workflow Observation",
      date: "December 12, 2025",
      tags: ["Orientation", "Member Assistance", "Observation"],
      excerpt: "I attended the SSS orientation, met my supervisor, and observed how interns assist members through the My.SSS portal.",
      content: "During my first day of OJT, I attended an orientation about the Social Security System (SSS), where I learned about its history, mandate, Vision, Mission, and core values. I was then assigned to the Member Assistance unit and introduced to my supervisor. Most of the day was spent observing how interns assist members using the My.SSS portal, including handling common inquiries such as account registration and contribution checks. This experience helped me understand the workflow and prepared me for upcoming tasks."
    },
    {
      id: 2,
      week: "Week 2",
      title: "Transition to Hands-On Assistance",
      date: "December 16-19, 2025",
      tags: ["Client Assistance", "Documents", "System Use"],
      excerpt: "I moved from observation to active participation by assisting members with basic concerns and processing documents.",
      content: "In this week, I transitioned from observation to hands-on participation. I began assisting members with guidance, handling basic inquiries such as account registration, contribution verification, and benefit applications. I also learned how to process documents by scanning, printing, and organizing files. With the help of fellow interns and GIP personnel, I became more comfortable interacting with clients and using the system."
    },
    {
      id: 3,
      week: "Week 3",
      title: "Handling Pre-Holiday Client Volume",
      date: "December 22-23, 26, 2025",
      tags: ["Client Support", "Efficiency", "Independence"],
      excerpt: "I managed more responsibilities during the pre-holiday rush while improving confidence and efficiency.",
      content: "During this week, I handled more responsibilities, especially due to the pre-holiday increase in clients. I assisted members with various concerns, including benefit applications and account updates, while also managing document processing tasks. I became more confident in performing tasks independently and improved my efficiency in handling multiple clients before the holiday break."
    },
    {
      id: 4,
      week: "Week 4",
      title: "Post-Holiday Workflow Re-Adjustment",
      date: "January 5-9, 2026",
      tags: ["Adjustment", "Portal Support", "Reinforcement"],
      excerpt: "After the break, I focused on readjusting to the workflow while reinforcing previously learned tasks.",
      content: "After the holiday break, I resumed my OJT and focused on regaining familiarity with the workflow. I assisted members with account inquiries, SSS number verification, and portal navigation. This week helped reinforce the skills I learned previously and allowed me to adjust back to the working environment."
    },
    {
      id: 5,
      week: "Week 5",
      title: "Growing Confidence in Daily Tasks",
      date: "January 12-15, 2026",
      tags: ["Communication", "Routine Tasks", "Accuracy"],
      excerpt: "I consistently assisted clients and improved my confidence, communication, and document accuracy.",
      content: "This week, I consistently assisted clients with various services such as account updates, benefit applications, and inquiries. I became more confident in communicating with members and handling routine tasks. My accuracy in processing documents and encoding information also improved."
    },
    {
      id: 6,
      week: "Week 6",
      title: "Time Management During Busy Hours",
      date: "January 20-22, 2026",
      tags: ["Time Management", "Multitasking", "Accuracy"],
      excerpt: "I handled multiple clients more efficiently while maintaining proper document handling standards.",
      content: "During this week, I handled multiple clients and improved my time management skills, especially during busy hours. I continued assisting with inquiries and applications while ensuring that documents were properly processed and organized. I became more efficient in completing tasks without compromising accuracy."
    },
    {
      id: 7,
      week: "Week 7",
      title: "Stronger Independence",
      date: "January 26-30, 2026",
      tags: ["Independence", "Productivity", "System Familiarity"],
      excerpt: "I performed tasks with less supervision and improved speed through better system familiarity.",
      content: "In this week, I demonstrated greater independence in performing tasks. I assisted members with minimal supervision and handled document processing more confidently. My familiarity with the system allowed me to complete tasks faster and more accurately."
    },
    {
      id: 8,
      week: "Week 8",
      title: "Introduction to Transmittal Encoding",
      date: "February 3-6, 2026",
      tags: ["Transmittal", "Data Entry", "Documentation"],
      excerpt: "I started transmittal tasks while continuing client support, with focus on accurate data encoding.",
      content: "This week, I was introduced to transmittal tasks, where I encoded member data into designated sheets and organized documents for submission. I continued assisting clients while learning the importance of accurate data entry and proper documentation in backend processes."
    },
    {
      id: 9,
      week: "Week 9",
      title: "Consistent Encoding and Verification",
      date: "February 9-13, 2026",
      tags: ["Verification", "Attention to Detail", "Transmittal"],
      excerpt: "I regularly handled transmittal encoding and document checking while improving attention to detail.",
      content: "During this week, I regularly performed transmittal encoding and document verification. I developed better attention to detail, ensuring that all data entered was accurate and complete. I also continued assisting members with their inquiries and applications."
    },
    {
      id: 10,
      week: "Week 10",
      title: "Balancing Frontend and Backend Duties",
      date: "February 16, 19, 2026",
      tags: ["Balance", "Client Service", "Backend Tasks"],
      excerpt: "I balanced direct client assistance with encoding and documentation duties to improve multitasking.",
      content: "This week focused on balancing both frontend and backend responsibilities. I assisted clients with their concerns while simultaneously handling encoding and documentation tasks. This helped me improve my efficiency and ability to multitask."
    },
    {
      id: 11,
      week: "Week 11",
      title: "Improved Consistency and Productivity",
      date: "February 23-25, 27, 2026",
      tags: ["Productivity", "Workload", "Confidence"],
      excerpt: "I handled mixed responsibilities more consistently while maintaining confidence and accuracy.",
      content: "In this week, I became more consistent and productive in my tasks. I handled encoding, document processing, and client assistance with greater confidence. My ability to manage workload and maintain accuracy improved significantly."
    },
    {
      id: 12,
      week: "Week 12",
      title: "Speed and Accuracy Improvements",
      date: "March 2-5, 2026",
      tags: ["Efficiency", "Routine Transactions", "Quality"],
      excerpt: "I focused on improving turnaround time while keeping data and document handling accurate.",
      content: "During this week, I continued performing both client assistance and encoding tasks. I focused on improving my speed and accuracy while handling routine transactions. My familiarity with the workflow made it easier to complete tasks efficiently."
    },
    {
      id: 13,
      week: "Week 13",
      title: "Managing Volume with Proper Records",
      date: "March 9-13, 2026",
      tags: ["Records", "High Workload", "Execution"],
      excerpt: "I handled multiple concerns while keeping documentation and transmittal records complete and accurate.",
      content: "This week, I handled multiple client concerns while maintaining accurate documentation and transmittal records. I improved my ability to manage workload and ensure that all tasks were completed properly despite busy schedules."
    },
    {
      id: 14,
      week: "Week 14",
      title: "Stronger Team Coordination",
      date: "March 16-19, 2026",
      tags: ["Communication", "Teamwork", "Organization"],
      excerpt: "I improved client communication and team coordination while continuing encoding and assistance tasks.",
      content: "During this week, I became more confident in communicating with members and coordinating with team members. I continued assisting clients and performing encoding tasks while ensuring accuracy and proper organization of documents."
    },
    {
      id: 15,
      week: "Week 15",
      title: "Closing Pending Work",
      date: "March 30-31, 2026",
      tags: ["Completion", "Finalization", "Records"],
      excerpt: "I focused on resolving pending tasks, organizing documents, and finalizing accurate records.",
      content: "This week focused on completing pending tasks and ensuring all records were accurate. I handled transmittal encoding, organized documents, and assisted clients with final inquiries. I ensured that all work was properly documented and submitted."
    },
    {
      id: 16,
      week: "Week 16",
      title: "Sustaining Daily Performance",
      date: "April 1, 6-8, 2026",
      tags: ["Consistency", "Coordination", "Daily Operations"],
      excerpt: "I maintained steady performance in both member assistance and backend documentation duties.",
      content: "In this week, I continued assisting members with their concerns while handling encoding and documentation tasks. I maintained efficiency and accuracy in completing daily responsibilities and coordinating with the team."
    },
    {
      id: 17,
      week: "Week 17",
      title: "Managing Multiple Responsibilities",
      date: "April 10, 13-15, 2026",
      tags: ["Responsibility", "Workflow", "Data Accuracy"],
      excerpt: "I handled client-facing and transmittal tasks together while ensuring proper organization and accuracy.",
      content: "During this week, I managed multiple responsibilities, including client assistance and transmittal tasks. I ensured that all entries were accurate and documents were properly organized, improving my overall workflow."
    },
    {
      id: 18,
      week: "Week 18",
      title: "Final Week Growth and Independence",
      date: "April 17, 20-23, 2026",
      tags: ["Final Week", "Independence", "Confidence"],
      excerpt: "I demonstrated stronger confidence and independence while balancing frontend and backend responsibilities.",
      content: "In my final recorded week, I demonstrated improved confidence, efficiency, and independence in handling tasks. I balanced frontend and backend responsibilities effectively, assisted clients smoothly, and ensured proper documentation and encoding of records."
    }
  ];

  return (
    <section id="blog" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-slide-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Weekly Journal</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <p className="mt-4 text-text-secondary max-w-xl">
              Documenting my experiences, challenges, and learnings week by week.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="inline-block px-4 py-2 rounded-full bg-surface border border-white/10 text-text-secondary text-sm">
              Total Entries: {entries.length}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entries.map((entry) => (
            <article key={entry.id} className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                    {entry.week}
                  </span>
                  <div className="flex items-center gap-2 text-text-secondary text-xs">
                    <Calendar size={14} />
                    <span>{entry.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {entry.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                  {entry.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {entry.tags.map((tag, i) => (
                    <span key={i} className="flex items-center gap-1 text-xs text-text-muted">
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedEntry(entry)}
                  className="w-full py-3 rounded-xl bg-surface hover:bg-white/5 border border-white/5 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 group-hover:gap-3"
                >
                  Read Full Entry
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEntry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedEntry(null)}>
          <div
            className="bg-zinc-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative shadow-2xl animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-text-secondary hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              onClick={() => setSelectedEntry(null)}
            >
              <X size={24} />
            </button>

            <div className="mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                {selectedEntry.week}
              </span>
              <h3 className="text-3xl font-bold text-white mb-2">{selectedEntry.title}</h3>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Calendar size={16} />
                <span>{selectedEntry.date}</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed">
              <p>{selectedEntry.content}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
              {selectedEntry.tags.map((tag, i) => (
                <span key={i} className="flex items-center gap-1 text-xs text-text-muted bg-surface px-3 py-1 rounded-full border border-white/5">
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WeeklyJourney;
