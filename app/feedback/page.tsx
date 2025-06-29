"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [satisfaction, setSatisfaction] = useState('neutral')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    // Prepare the form data
    const formData = {
      access_key: "fd0c66e5-b9d3-4d12-a24e-6e54ec7fd249", // Replace with your Web3Forms API key
      name: name,
      email: email,
      satisfaction: satisfaction,
      message: comments,
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true) // Show thank you message
      } else {
        // Handle errors (optional)
        console.error('Error submitting feedback:', result);
      }
    } catch (error) {
      console.error('Network error:', error)
    }
  }

  if (submitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Thank You!</CardTitle>
          <CardDescription>Your feedback has been submitted successfully.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Feedback</h1>
      <p className="text-xl">Share your opinions and help us improve</p>

      <Card className="w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Feedback Form</CardTitle>
            <CardDescription>We value your input</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label>How satisfied are you with Nagrik?</Label>
              <RadioGroup 
                value={satisfaction} 
                onValueChange={setSatisfaction} 
                defaultValue="neutral"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                  <Label htmlFor="very-satisfied">Very Satisfied</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="satisfied" id="satisfied" />
                  <Label htmlFor="satisfied">Satisfied</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="neutral" id="neutral" />
                  <Label htmlFor="neutral">Neutral</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="unsatisfied" id="unsatisfied" />
                  <Label htmlFor="unsatisfied">Unsatisfied</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="very-unsatisfied" id="very-unsatisfied" />
                  <Label htmlFor="very-unsatisfied">Very Unsatisfied</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="comments">Additional Comments</Label>
              <Textarea 
                id="comments" 
                value={comments} 
                onChange={(e) => setComments(e.target.value)} 
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Submit Feedback</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
