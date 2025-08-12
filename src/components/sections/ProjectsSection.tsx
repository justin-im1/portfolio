import GithubSocialIcon from '../icons/GithubSocialIcon';

export default function ProjectsSection() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-white/90 text-sm md:text-base">Golf In One</div>
          <div className="text-gray-400 text-sm md:text-base mt-1">Solution for tracking golf performance</div>
        </div>
        <a href="https://github.com/justin-im1/Golf-In-One" target="_blank" rel="noopener noreferrer" 
           className="flex items-center justify-center text-white">
          <GithubSocialIcon className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-white/90 text-sm md:text-base">SaaS Website Builder</div>
          <div className="text-gray-400 text-sm md:text-base mt-1">SaaS tool for building websites</div>
        </div>
        <a href="https://github.com/justin-im1/SaaS-Website-Builder" target="_blank" rel="noopener noreferrer" 
           className="flex items-center justify-center text-white">
          <GithubSocialIcon className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-white/90 text-sm md:text-base">Portfolio</div>
          <div className="text-gray-400 text-sm md:text-base mt-1">Personal portfolio to learn about me</div>
        </div>
        <a href="https://github.com/justin-im1/portfolio" target="_blank" rel="noopener noreferrer" 
           className="flex items-center justify-center text-white">
          <GithubSocialIcon className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-white/90 text-sm md:text-base">YelpCamp</div>
          <div className="text-gray-400 text-sm md:text-base mt-1">Campground review platform</div>
        </div>
        <a href="https://github.com/justin-im1/YelpCamp" target="_blank" rel="noopener noreferrer" 
           className="flex items-center justify-center text-white">
          <GithubSocialIcon className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>
    </div>
  );
} 