import connectDB from "@/config/database";
import Property from "@/models/Properties";
export const GET = async (request) => {
  try {
    await connectDB();
    const properties = await Property.find({});

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    return new Response("Something Went Wrong", { status: 500 });
  }
};
