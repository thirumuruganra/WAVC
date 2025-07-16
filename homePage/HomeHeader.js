// Header for the home page using shadcn UI and accent color
export default function HomeHeader() {
  return (
    <header className="w-full text-center pt-8 pb-2">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-1.5" style={{letterSpacing: '-0.01em'}}>
        WAVC
      </h1>
      <div className="text-base md:text-lg font-medium" style={{ color: 'var(--accent2)' }}>
        Stay in the loop. Stay&nbsp;in&nbsp;the&nbsp;club
      </div>
    </header>
  );
}
