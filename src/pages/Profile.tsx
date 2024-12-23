import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Briefcase, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState, useRef } from "react";

const Profile = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState("/lovable-uploads/0f80e0fa-428b-4a89-b29c-02d0e527a4f1.png");

  const handleSave = () => {
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        toast({
          title: "Profile picture updated",
          description: "Your profile picture has been changed successfully.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="container max-w-2xl py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Profile Settings</h1>

      <div className="space-y-6">
        {/* Profile Picture Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={profileImage} alt="Profile picture" />
              <AvatarFallback>
                <User className="h-12 w-12" />
              </AvatarFallback>
            </Avatar>
            <div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
              <Button variant="outline" onClick={handleChangeClick}>
                Change Picture
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                defaultValue="profile@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Address
              </label>
              <Input
                type="text"
                placeholder="Enter your address"
                defaultValue="123 Main St, City, Country"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Job Title
              </label>
              <Input
                type="text"
                placeholder="Enter your job title"
                defaultValue="Pharmacist"
              />
            </div>

            <Button onClick={handleSave} className="w-full mt-4">
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;