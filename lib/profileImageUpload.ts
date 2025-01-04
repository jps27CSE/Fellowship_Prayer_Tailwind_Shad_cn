// utils/fileUtils.ts
import { supabase } from "@/lib/supabase"; // Adjust path to where your supabase client is located

export const uploadProfileImage = async (file: File): Promise<string> => {
  const fileName = `${Date.now()}_${file.name}`; // Unique file name to avoid overwriting
  const filePath = `profile_pic/${fileName}`;

  // Upload the file to Supabase bucket
  const { data, error } = await supabase.storage
    .from("profile_pic")
    .upload(filePath, file);

  if (error) {
    throw new Error("Failed to upload image to Supabase.");
  }

  // Get the public URL for the uploaded image
  // @ts-ignore
  const { data: urlData, error: urlError } = supabase.storage
    .from("profile_pic")
    .getPublicUrl(filePath);

  if (urlError) {
    throw new Error("Failed to fetch public URL for image.");
  }

  console.log(urlData);

  return urlData.publicUrl; // Return the public URL of the uploaded image
};
