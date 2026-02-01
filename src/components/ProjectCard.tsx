import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags?: string[];
  href?: string;
  metrics?: Array<{ label: string; value: string }>;
  className?: string;
}

const ProjectCard = ({ title, description, imageSrc, tags = [], href, metrics = [], className }: ProjectCardProps) => {
  return (
    <div
      className={`card overflow-hidden hover-lift ${className ?? ''}`.trim()}
    >
      <img 
        src={imageSrc} 
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-medium mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}
        {metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg bg-slate-50 px-3 py-2 text-center">
                <p className="text-sm font-semibold text-gray-900">{metric.value}</p>
                <p className="text-xs text-gray-500">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            aria-label={`View project: ${title}`}
          >
            View Project <ExternalLink size={16} className="ml-2" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 