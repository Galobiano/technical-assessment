import React, { useState, ChangeEvent, FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

const SentAMessage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/contact-api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();
      setStatus(result.message);

      if (result.success) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#B77466]">
            Sent A Message
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label className="text-md text-[#B77466] font-bold">Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                className="rounded-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-md text-[#B77466]  font-bold">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-md text-[#B77466]  font-bold">
                Subject
              </Label>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                className="rounded-full"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-md text-[#B77466]  font-bold">
                Message
              </Label>
              <Textarea
                name="message"
                placeholder="Message"
                className="rounded-2xl"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              className="py-5 px-6 rounded-full mt-2 cursor-pointer font-bold"
            >
              SEND MESSAGE
            </Button>

            {status && (
              <p className="text-center text-[#B77466] font-semibold mt-3">
                {status}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SentAMessage;
