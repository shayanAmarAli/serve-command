import { NextRequest, NextResponse } from "next/server";
import { mockServerClient } from "mockserver-client";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { username, password } = await req.json();
  const client = mockServerClient("localhost", 1080);

  const mockResponse = {
    httpRequest: {
      method: "POST",
      path: "/login",
      body: { username: username, password: password },
    },
    httpResponse: {
      statusCode: 200,
      body: JSON.stringify({ message: "Data received successfully" }),
    },
  };

  try {
    const clientResponse = await client.mockAnyResponse(mockResponse);
    console.log("Data sent to mock server successfully");
    return NextResponse.json({message: clientResponse})
  } catch (error) {
    console.error("Error sending data to mock server:", error);
  }
};
