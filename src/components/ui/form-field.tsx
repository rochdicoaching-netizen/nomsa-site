import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl border border-grey-200 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-colors duration-200 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20";

export function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-teal-900">
      {children}
      {required ? (
        <span className="ml-0.5 text-gold-700" aria-hidden="true">
          *
        </span>
      ) : null}
    </label>
  );
}

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldBase, className)} {...props} />;
}

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldBase, "min-h-32 resize-y", className)} {...props} />;
}

export function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(fieldBase, "appearance-none bg-no-repeat pr-10", className)} {...props}>
      {children}
    </select>
  );
}

export function Field({
  id,
  label,
  required,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {children}
    </div>
  );
}

export function Checkbox({
  id,
  label,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { id: string; label: React.ReactNode }) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <input
        id={id}
        type="checkbox"
        className="mt-0.5 size-4.5 shrink-0 rounded border-grey-400 text-teal-700 focus:ring-2 focus:ring-teal-600/30"
        {...props}
      />
      <label htmlFor={id} className="text-sm leading-relaxed text-charcoal/75">
        {label}
      </label>
    </div>
  );
}
