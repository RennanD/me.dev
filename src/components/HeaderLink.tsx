import { tw } from '@/utils/tw';

type HeaderLinkProps = {
  title: string;
  path: string;
  isActive: boolean;
};

export function HeaderLink({ isActive, path, title }: HeaderLinkProps) {
  return (
    <li
      className={tw(
        `flex flex-col text-gray-100 h-full px-8 py-[17.5px] relative after:content-[''] after:left-0 after:bottom-0 after:absolute after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full hover:after:transition-width hover:after:duration-500`,
        {
          'after:w-full text-white bg-omni-selection': isActive,
        },
      )}
    >
      <a className="h-full w-full" href={path}>
        {title}.tsx
      </a>
    </li>
  );
}
