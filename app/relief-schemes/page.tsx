import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProtectedPage from "@/components/ProtectedPage";

const schemes = [
  {
    category: "Social Security",
    items: [
      {
        title: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
        description: "Financial inclusion program to ensure access to financial services",
        eligibility: "All Indian citizens",
        benefits: "Zero balance savings account, RuPay debit card, ₹1 lakh accident insurance cover, ₹30,000 life insurance cover",
        link: "https://pmjdy.gov.in/scheme"
      },
      {
        title: "Atal Pension Yojana (APY)",
        description: "Pension scheme for unorganized sector workers",
        eligibility: "Indian citizens aged 18-40 years",
        benefits: "Guaranteed minimum pension of ₹1,000 to ₹5,000 per month after 60 years of age",
        link: "https://www.npscra.nsdl.co.in/scheme-details.php"
      },
    ]
  },
  {
    category: "Health",
    items: [
      {
        title: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)",
        description: "Health insurance scheme for the poor and vulnerable",
        eligibility: "Poor and vulnerable families as per SECC database",
        benefits: "Health coverage up to ₹5 lakh per family per year for secondary and tertiary care hospitalization",
        link: "https://pmjay.gov.in/about/pmjay"
      },
      {
        title: "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)",
        description: "Safe motherhood program",
        eligibility: "All pregnant women",
        benefits: "Free comprehensive and quality antenatal care to pregnant women on the 9th of every month",
        link: "https://pmsma.nhp.gov.in/"
      },
    ]
  },
  {
    category: "Agriculture",
    items: [
      {
        title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
        description: "Income support scheme for farmers",
        eligibility: "Small and marginal farmers with cultivable land up to 2 hectares",
        benefits: "Direct income support of ₹6,000 per year in three equal installments",
        link: "https://pmkisan.gov.in/"
      },
      {
        title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        description: "Crop insurance scheme",
        eligibility: "All farmers including sharecroppers and tenant farmers",
        benefits: "Insurance coverage and financial support in case of crop failure due to natural calamities, pests & diseases",
        link: "https://pmfby.gov.in/"
      },
    ]
  },
  {
    category: "Education",
    items: [
      {
        title: "Samagra Shiksha Abhiyan",
        description: "Integrated scheme for school education",
        eligibility: "All students in government schools",
        benefits: "Improving quality of education from pre-school to senior secondary levels",
        link: "https://samagra.education.gov.in/"
      },
      {
        title: "Pradhan Mantri Vidya Lakshmi Karyakram",
        description: "Education loan scheme",
        eligibility: "Students seeking higher education in India and abroad",
        benefits: "Single window electronic platform for students to access information and make applications for educational loans",
        link: "https://www.vidyalakshmi.co.in/Students/"
      },
    ]
  },
]

export default function ReliefSchemes() {
  return (
    <ProtectedPage>
      <div className="space-y-8">
      <h1 className="text-3xl font-bold">Relief Schemes</h1>
      <p className="text-xl">Discover government relief schemes you may be eligible for</p>

      <Tabs defaultValue={schemes[0].category}>
        <TabsList>
          {schemes.map((category) => (
            <TabsTrigger key={category.category} value={category.category}>
              {category.category}
            </TabsTrigger>
          ))}
        </TabsList>
        {schemes.map((category) => (
          <TabsContent key={category.category} value={category.category}>
            <div className="grid gap-6">
              {category.items.map((scheme, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{scheme.title}</CardTitle>
                    <CardDescription>{scheme.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
                    <p><strong>Benefits:</strong> {scheme.benefits}</p>
                    <Button asChild className="mt-4">
                      <Link href={scheme.link} target="_blank" rel="noopener noreferrer">
                        Apply Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
    </ProtectedPage>
  );
}
