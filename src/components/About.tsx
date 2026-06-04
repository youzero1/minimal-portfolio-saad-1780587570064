import { MapPin, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">About Me</h2>
        <p className="text-brand font-medium text-center mb-12">A little about myself</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">
              I'm a passionate full-stack developer with 4+ years of experience building
              modern web applications. I love turning complex problems into simple, elegant
              solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me hiking, reading tech blogs, or experimenting
              with new frameworks and tools. I'm always eager to learn and grow.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                <p className="font-semibold text-gray-800">San Francisco, CA</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                <Briefcase size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Experience</p>
                <p className="font-semibold text-gray-800">4+ Years in Web Development</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Education</p>
                <p className="font-semibold text-gray-800">B.Sc. Computer Science, MIT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
