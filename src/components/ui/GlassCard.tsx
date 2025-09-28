import { cn } from '@/lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-xl border border-white/20 dark:border-white/10 shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}