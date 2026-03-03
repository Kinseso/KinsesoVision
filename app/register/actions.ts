'use server';

import { redirect } from 'next/navigation';

export async function registerUser(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  
  console.log("Registration Attempt:", { name, email });

  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // After "registering", send them to the feed
  redirect('/feed');
}