export default async function postContact(name, email, message) {
  // note await here
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  // so we don't need await here
  return response.json();
}
