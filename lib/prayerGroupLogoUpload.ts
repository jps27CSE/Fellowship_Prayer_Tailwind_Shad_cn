import { supabase } from "@/lib/supabase";

export const uploadPrayerGroupLogo = async (imageFile: File) => {
  // Ensure the imageFile is valid
  if (!imageFile) {
    throw new Error("No image file provided.");
  }

  // Check if the file has a valid type
  if (!imageFile.type) {
    throw new Error("Invalid file type.");
  }

  // Extract the file extension from the MIME type (e.g., 'image/jpeg' -> 'jpeg')
  const fileExtension = imageFile.type.split("/")[1];
  const fileName = `${Date.now()}_${imageFile.name}`; // Unique name based on timestamp and file name

  // Upload the image to Supabase Storage (assuming you have a bucket named 'group-logos')
  const { data, error } = await supabase.storage
    .from("prayer_group_logo")
    .upload(fileName, imageFile);

  if (error) {
    throw new Error(`Error uploading file: ${error.message}`);
  }

  // Return the image URL
  const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/prayer_group_logo/${fileName}`;
  return imageUrl;
};
