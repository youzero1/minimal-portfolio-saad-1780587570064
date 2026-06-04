import { ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';
import type { Project } from '@/types';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Projects</h2>
        <p className="text-brand font-medium text-center mb-12">Things I've built</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                <a
                  href={project.link}
                  aria-label="View project"
                  className="text-gray-400 hover:text-brand transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-brand/10 text-brand px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
