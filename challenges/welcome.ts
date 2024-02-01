
type Language = "english" | "czech" | "danish" | "dutch" | "estonian" | "finnish" | "flemish" | "french" | "german" | "irish" | "italian" | "latvian" | "lithuanian" | "polish" | "spanish" | "swedish" | "welsh";
export function greet(language: string): string {
  const database: Record<string, string>[] = [
    { "english": "Welcome" },
    { "czech": "Vitejte" },
    { "danish": "Velkomst" },
    { "dutch": "Welkom" },
    { "estonian": "Tere tulemast" },
    { "finnish": "Tervetuloa" },
    { "flemish": "Welgekomen" },
    { "french": "Bienvenue" },
    { "german": "Willkommen" },
    { "irish": "Failte" },
    { "italian": "Benvenuto" },
    { "latvian": "Gaidits" },
    { "lithuanian": "Laukiamas" },
    { "polish": "Witamy" },
    { "spanish": "Bienvenido" },
    { "swedish": "Valkommen" },
    { "welsh": "Croeso" }
  ];

  const languageFound = database.filter((e) => e[language]);
  // console.log(languageFound[0][language])
  return languageFound[0][language]
}