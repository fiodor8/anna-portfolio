export default function AboutLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className={`flex-1 pb-8 text max-w-screen-2xl overflow-scroll delay-200 transition-all duration-200`}>
      {children}
    </div>
  )
}