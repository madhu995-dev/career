import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Upload, Clipboard, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ResumeHelper = () => {
  const [showForm, setShowForm] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFile(file);
      console.log("File uploaded:", file.name);
    }
  };

  const handleAnalyze = () => {
    console.log("Analyzing resume with job description:", jobDescription);
    console.log("Resume file:", resumeFile?.name);
    console.log("Resume text:", resumeText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Back Button */}
        <Link 
          to="/dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Resume Helper</h1>
          </div>
          <p className="text-lg text-muted-foreground">Get professional HR evaluation of your resume</p>
        </div>

        {/* Main Card */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Resume Helper
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <Button 
                onClick={() => setShowForm(!showForm)}
                size="lg"
              >
                {showForm ? "Hide Form" : "Show Form"}
              </Button>
            </div>

            {showForm && (
              <div className="space-y-6">
                {/* Title */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Upload className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold">Upload & Analyze</h2>
                  </div>
                </div>

                {/* Job Description */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Job Description *
                  </label>
                  <Textarea
                    placeholder="Paste the job description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="min-h-[120px]"
                    required
                  />
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left Column - File Upload */}
                  <div className="space-y-4">
                    <label className="block text-sm font-medium">
                      Upload Resume File
                    </label>
                    
                    <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center hover:border-primary transition-colors">
                      <input
                        type="file"
                        id="resume-file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label 
                        htmlFor="resume-file" 
                        className="cursor-pointer flex flex-col items-center gap-4"
                      >
                        <div className="p-4 bg-primary/10 rounded-full">
                          <Upload className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Click to upload</p>
                          <p className="text-sm text-muted-foreground">
                            or drag and drop
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          PDF, DOC, DOCX (max 10MB)
                        </p>
                      </label>
                    </div>
                    
                    {resumeFile && (
                      <p className="text-sm text-green-600 font-medium">
                        ✓ {resumeFile.name} uploaded
                      </p>
                    )}
                  </div>

                  {/* OR Divider */}
                  <div className="flex items-center justify-center lg:flex-col">
                    <div className="bg-muted text-muted-foreground px-4 py-2 rounded-full font-semibold text-lg">
                      OR
                    </div>
                  </div>

                  {/* Right Column - Text Input */}
                  <div className="space-y-4">
                    <label className="block text-sm font-medium">
                      Paste Resume Text
                    </label>
                    <div className="space-y-2">
                      <Textarea
                        placeholder="Copy and paste your resume content here..."
                        value={resumeText}
                        onChange={(e) => setResumeText(e.target.value)}
                        className="min-h-[200px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Analyze Button */}
                <div className="text-center pt-6">
                  <Button 
                    onClick={handleAnalyze}
                    size="lg"
                    className="px-8"
                    disabled={!jobDescription || (!resumeFile && !resumeText)}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Get Professional HR Evaluation
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResumeHelper;