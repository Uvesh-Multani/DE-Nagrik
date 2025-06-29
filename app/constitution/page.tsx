import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProtectedPage from "@/components/ProtectedPage";

export default function Constitution() {
  return (
    <ProtectedPage>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Constitution of India</h1>
        <p className="text-xl">Understanding the fundamental principles governing India</p>

        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The Constitution of India is the supreme law of India. It lays down the framework defining fundamental political principles, establishes the structure, procedures, powers, and duties of government institutions, and sets out fundamental rights, directive principles, and the duties of citizens.</p>
            <ul className="list-disc list-inside mt-4">
              <li><strong>Adopted on:</strong> 26 November 1949</li>
              <li><strong>Came into effect on:</strong> 26 January 1950</li>
              <li><strong>Length:</strong> Originally 395 articles in 22 parts and 8 schedules, now with 448 articles in 25 parts and 12 schedules</li>
              <li><strong>Amendments:</strong> 105 (as of 2021)</li>
              <li><strong>Inspiration:</strong> Drawn from various sources including Government of India Act 1935, constitutions of other countries, and indigenous political systems</li>
            </ul>
          </CardContent>
        </Card>

        <Tabs defaultValue="structure">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="structure">Structure</TabsTrigger>
            <TabsTrigger value="key-features">Key Features</TabsTrigger>
            <TabsTrigger value="amendments">Major Amendments</TabsTrigger>
          </TabsList>
          <TabsContent value="structure">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="preamble">
                <AccordionTrigger>Preamble</AccordionTrigger>
                <AccordionContent>
                  <p>The Preamble to the Constitution of India is a brief introductory statement that sets out the guiding purpose, principles and philosophy of the Indian Constitution. It reads:</p>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                  &quot;WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:
                    <br />JUSTICE, social, economic and political;
                    <br />LIBERTY of thought, expression, belief, faith and worship;
                    <br />EQUALITY of status and of opportunity;
                    <br />and to promote among them all
                    <br />FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation;
                    <br />IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.&quot;
                  </blockquote>
                  <p className="mt-2">Key elements of the Preamble:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li><strong>Sovereign:</strong> India is internally and externally sovereign</li>
                    <li><strong>Socialist:</strong> Added by the 42nd Amendment in 1976</li>
                    <li><strong>Secular:</strong> The state treats all religions equally</li>
                    <li><strong>Democratic:</strong> The Constitution provides for a democratic system</li>
                    <li><strong>Republic:</strong> The head of state is elected, not a hereditary monarch</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="fundamental-rights">
              <AccordionTrigger>Fundamental Rights</AccordionTrigger>
              <AccordionContent>
                <p>The Fundamental Rights are defined in Part III of the Constitution from Articles 12 to 35. These include:</p>
                <ul className="list-disc list-inside mt-2">
                  <li><strong>Right to Equality (Articles 14-18):</strong>
                    <ul className="list-disc list-inside ml-4">
                      <li>Equality before law (Article 14)</li>
                      <li>Prohibition of discrimination (Article 15)</li>
                      <li>Equality of opportunity in public employment (Article 16)</li>
                      <li>Abolition of untouchability (Article 17)</li>
                      <li>Abolition of titles (Article 18)</li>
                    </ul>
                  </li>
                  <li><strong>Right to Freedom (Articles 19-22):</strong>
                    <ul className="list-disc list-inside ml-4">
                      <li>Freedom of speech and expression, assembly, association, movement, residence, and profession (Article 19)</li>
                      <li>Protection in respect to conviction for offenses (Article 20)</li>
                      <li>Protection of life and personal liberty (Article 21)</li>
                      <li>Right to education (Article 21A)</li>
                      <li>Protection against arrest and detention in certain cases (Article 22)</li>
                    </ul>
                  </li>
                  <li><strong>Right against Exploitation (Articles 23-24):</strong>
                    <ul className="list-disc list-inside ml-4">
                      <li>Prohibition of traffic in human beings and forced labor (Article 23)</li>
                      <li>Prohibition of employment of children in factories, etc. (Article 24)</li>
                    </ul>
                  </li>
                  <li><strong>Right to Freedom of Religion (Articles 25-28):</strong>
                    <ul className="list-disc list-inside ml-4">
                      <li>Freedom of conscience and free profession, practice and propagation of religion (Article 25)</li>
                      <li>Freedom to manage religious affairs (Article 26)</li>
                      <li>Freedom from taxation for promotion of any religion (Article 27)</li>
                      <li>Freedom from attending religious instruction or worship in certain educational institutions (Article 28)</li>
                    </ul>
                  </li>
                  <li><strong>Cultural and Educational Rights (Articles 29-30):</strong>
                    <ul className="list-disc list-inside ml-4">
                      <li>Protection of interests of minorities (Article 29)</li>
                      <li>Right of minorities to establish and administer educational institutions (Article 30)</li>
                    </ul>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="directive-principles">
              <AccordionTrigger>Directive Principles of State Policy</AccordionTrigger>
              <AccordionContent>
                <p>The Directive Principles of State Policy are guidelines for the framing of laws by the government. These are contained in Part IV of the Constitution (Articles 36-51). Some important ones include:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Equal justice and free legal aid (Article 39A)</li>
                  <li>Organization of village panchayats (Article 40)</li>
                  <li>Right to work, education, and public assistance (Article 41)</li>
                  <li>Provision for just and humane conditions of work and maternity relief (Article 42)</li>
                  <li>Living wage for workers (Article 43)</li>
                  <li>Uniform civil code for citizens (Article 44)</li>
                  <li>Promotion of educational and economic interests of scheduled castes, scheduled tribes, and other weaker sections (Article 46)</li>
                  <li>Duty of the state to raise the level of nutrition and the standard of living and to improve public health (Article 47)</li>
                  <li>Protection and improvement of environment and safeguarding of forests and wildlife (Article 48A)</li>
                  <li>Protection of monuments and places and objects of national importance (Article 49)</li>
                  <li>Separation of judiciary from executive (Article 50)</li>
                  <li>Promotion of international peace and security (Article 51)</li>
                </ul>
                <p className="mt-2">While these principles are not enforceable by any court, they are fundamental in the governance of the country and it is the duty of the State to apply these principles in making laws.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="fundamental-duties">
              <AccordionTrigger>Fundamental Duties</AccordionTrigger>
              <AccordionContent>
                <p>The Fundamental Duties of citizens were added to the Constitution by the 42nd Amendment in 1976, upon the recommendations of the Swaran Singh Committee. These are defined in Article 51A under Part IVA of the Constitution. They include:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>To abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem</li>
                  <li>To cherish and follow the noble ideals which inspired our national struggle for freedom</li>
                  <li>To uphold and protect the sovereignty, unity and integrity of India</li>
                  <li>To defend the country and render national service when called upon to do so</li>
                  <li>To promote harmony and the spirit of common brotherhood amongst all the people of India transcending religious, linguistic and regional or sectional diversities</li>
                  <li>To value and preserve the rich heritage of our composite culture</li>
                  <li>To protect and improve the natural environment including forests, lakes, rivers and wildlife, and to have compassion for living creatures</li>
                  <li>To develop the scientific temper, humanism and the spirit of inquiry and reform</li>
                  <li>To safeguard public property and to abjure violence</li>
                  <li>To strive towards excellence in all spheres of individual and collective activity so that the nation constantly rises to higher levels of endeavour and achievement</li>
                  <li>Who is a parent or guardian to provide opportunities for education to his child or, as the case may be, ward between the age of six and fourteen years (added by the 86th Amendment in 2002)</li>
                </ul>
                <p className="mt-2">While these duties are not enforceable by law, they serve as a moral obligation for citizens to promote a sense of patriotism and to strengthen the unity of the country.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="key-features">
          <Card>
            <CardHeader>
              <CardTitle>Key Features of the Indian Constitution</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Longest Written Constitution:</strong> The Indian Constitution is the world&apos;s longest written constitution for a sovereign country.</li>
                <li><strong>Quasi-Federal System:</strong> The Constitution provides for a federal system with a strong center, often described as &quot;federal in form but unitary in spirit&quot;.</li>
                <li><strong>Parliamentary Form of Government:</strong> The Constitution establishes a parliamentary system of government both at the Center and in the states.</li>
                <li><strong>Fundamental Rights:</strong> The Constitution guarantees fundamental rights to all citizens, which are justiciable.</li>
                <li><strong>Directive Principles:</strong> It includes Directive Principles of State Policy as guidelines for governance.</li>
                <li><strong>Fundamental Duties:</strong> The Constitution lists fundamental duties for citizens, added by the 42nd Amendment.</li>
                <li><strong>Secularism:</strong> The Constitution declares India as a secular state, treating all religions equally.</li>
                <li><strong>Universal Adult Franchise:</strong> It provides for universal adult suffrage, granting voting rights to all citizens above 18 years of age.</li>
                <li><strong>Independent Judiciary:</strong> The Constitution establishes an independent judiciary with the power of judicial review.</li>
                <li><strong>Single Citizenship:</strong> Unlike some federal systems, India has single citizenship for the entire country.</li>
                <li><strong>Emergency Provisions:</strong> The Constitution includes provisions for declaring emergency in special circumstances.</li>
                <li><strong>Three-tier Government:</strong> It provides for a three-tier governmental structure - Center, State, and Local Bodies (Panchayats and Municipalities).</li>
                <li><strong>Flexible and Rigid:</strong> The Constitution is a blend of rigidity and flexibility, with different amendment procedures for different parts.</li>
                <li><strong>Special Provisions for Scheduled Castes and Tribes:</strong> It includes special measures for the protection and advancement of Scheduled Castes and Scheduled Tribes.</li>
                <li><strong>Official Languages:</strong> The Constitution recognizes Hindi in Devanagari script as the official language of the Union, while also providing for the continuation of English for official purposes.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="amendments">
          <Card>
            <CardHeader>
              <CardTitle>Major Amendments to the Constitution</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>First Amendment (1951):</strong> Added Ninth Schedule to protect land reform laws from judicial review.</li>
                <li><strong>Seventh Amendment (1956):</strong> Reorganized states on linguistic basis.</li>
                <li><strong>Twenty-fourth Amendment (1971):</strong> Affirmed Parliament&apos;s power to amend any part of the Constitution.</li>
                <li><strong>Forty-second Amendment (1976):</strong> 
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Added words &apos;socialist&apos; and &apos;secular&apos; to the Preamble</li>
                    <li>Added Fundamental Duties</li>
                    <li>Changed the term of Lok Sabha and State Assemblies from 5 to 6 years</li>
                  </ul>
                </li>
                <li><strong>Forty-fourth Amendment (1978):</strong> Restored the term of Lok Sabha and State Assemblies to 5 years.</li>
                <li><strong>Sixty-first Amendment (1988):</strong> Lowered voting age from 21 to 18 years.</li>
                <li><strong>Seventy-third and Seventy-fourth Amendments (1992):</strong> Gave constitutional status to Panchayati Raj Institutions and Urban Local Bodies.</li>
                <li><strong>Eighty-sixth Amendment (2002):</strong> Made right to education a fundamental right for children aged 6-14 years.</li>
                <li><strong>Ninety-first Amendment (2003):</strong> Limited the size of the Council of Ministers to 15% of the strength of the lower house.</li>
                <li><strong>Ninety-ninth Amendment (2014):</strong> Provided for the establishment of National Judicial Appointments Commission (later struck down by Supreme Court).</li>
                <li><strong>One Hundred and First Amendment (2016):</strong> Introduced Goods and Services Tax (GST).</li>
                <li><strong>One Hundred and Third Amendment (2019):</strong> Provided 10% reservation for Economically Weaker Sections (EWS) in education and government jobs.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>      
  </ProtectedPage>
  );
}
