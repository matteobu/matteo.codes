import { CONTACT_LINKS } from '@/utils/constants';

export default function RenderContactLinks() {
  return (
    <div className="flex flex-row items-center justify-center">
      {CONTACT_LINKS.map(({ icon: Icon, href, color }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          className={`text-3xl m-1`}
          style={{ color: color }}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
