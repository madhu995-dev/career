export const formatName = (rawName: string | null): string => {
  if (!rawName) return "User";

  let name = rawName.trim();

  // If email → take before @
  if (name.includes("@")) {
    name = name.split("@")[0];
  }

  // If full name → take first word
  if (name.includes(" ")) {
    name = name.split(" ")[0];
  }

  // Remove numbers & special chars
  name = name.replace(/[^a-zA-Z]/g, "");

  // Capitalize first letter
  if (name.length > 0) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  return "User";
};
