export interface DateTimeFormatOptions {
    weekday?:"long" | "short" | "narrow";
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" |"long" | "short" | "narrow";
    day?: "numeric" | "2-digit";
    hour?: "numeric" | "2-digit";
    minute?: "numeric" | "2-digit";
}

export const dateOptions:DateTimeFormatOptions = { year: 'numeric', month: 'long',day:"numeric" };
