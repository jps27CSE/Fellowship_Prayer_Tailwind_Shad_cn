import { supabase } from "@/lib/supabase";

export const bannerImageUpload = async (file: File) => {
  try {
    const filename = `${Date.now()}-${file.name}`;

    // Ensure we await the upload process correctly
    const { data, error } = await supabase.storage
      .from("banner_image")
      .upload(filename, file);

    if (error) {
      throw new Error("Failed to upload banner image");
    }

    // Construct the public URL for the uploaded image
    const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/banner_image/${data.path}`;

    return publicUrl;
  } catch (error) {
    console.error("Error uploading banner image", error);
    throw error;
  }
};
