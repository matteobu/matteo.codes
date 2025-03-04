import ThemeSwitcher from './ThemeSwitcher';

export default function Sidebar() {
  return (
    <div className="w-1/5 p-6 sticky top-0 h-full">
      <ThemeSwitcher />
      <h2 className="text-xl font-semibold">Sidebar</h2>
    </div>
  );
}
