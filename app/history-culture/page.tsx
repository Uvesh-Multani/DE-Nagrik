import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ProtectedPage from "@/components/ProtectedPage";

export default function HistoryCulture() {
  return (
    <ProtectedPage>
      <div className="space-y-8">   
      <h1 className="text-3xl font-bold">History and Culture of India</h1>
      <p className="text-xl">Explore the rich heritage and diverse culture of India</p>

      <Tabs defaultValue="history">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="culture">Culture</TabsTrigger>
        </TabsList>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Historical Timeline of India</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="prehistoric">
                  <AccordionTrigger>Prehistoric Era (Before 3300 BCE)</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Paleolithic Age (2,500,000-10,000 BCE):</strong> Early humans used stone tools and lived as hunter-gatherers. Sites like Bhimbetka rock shelters in Madhya Pradesh provide evidence of early human life.</li>
                      <li><strong>Mesolithic Age (10,000-6,000 BCE):</strong> Development of microliths (small stone tools) and beginnings of agriculture. Sites like Bagor in Rajasthan show evidence of this period.</li>
                      <li><strong>Neolithic Age (6,000-3,300 BCE):</strong> Development of agriculture, animal husbandry, and pottery. Mehrgarh in Balochistan is a significant site from this period.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ancient">
                  <AccordionTrigger>Ancient India (3300 BCE - 1200 CE)</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Indus Valley Civilization (3300-1300 BCE):</strong> 
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Urban planning: Grid-like streets, advanced drainage systems</li>
                          <li>Major cities: Harappa, Mohenjo-daro, Dholavira</li>
                          <li>Economy based on agriculture and trade</li>
                          <li>Developed writing system (still undeciphered)</li>
                          <li>Decline around 1900 BCE, possibly due to climate change</li>
                        </ul>
                      </li>
                      <li><strong>Vedic Period (1500-500 BCE):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Arrival of Aryan-speaking tribes from Central Asia</li>
                          <li>Composition of the Vedas, including the Rigveda</li>
                          <li>Development of caste system</li>
                          <li>Shift from tribal society to territorial kingdoms</li>
                          <li>Rise of Brahmanism and early Hinduism</li>
                        </ul>
                      </li>
                      <li><strong>Mahajanapadas (600-300 BCE):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>16 major states or republics in ancient India</li>
                          <li>Rise of urban centers and trade</li>
                          <li>Development of coinage</li>
                          <li>Emergence of new religions: Buddhism and Jainism</li>
                        </ul>
                      </li>
                      <li><strong>Maurya Empire (322-185 BCE):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Founded by Chandragupta Maurya</li>
                          <li>Reached its peak under Emperor Ashoka (268-232 BCE)</li>
                          <li>Ashoka&apos;s conversion to Buddhism and spread of the religion</li>
                          <li>Extensive trade networks and diplomatic relations</li>
                          <li>Decline after Ashoka&apos;s death</li>
                        </ul>
                      </li>
                      <li><strong>Classical Age (320-550 CE):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Gupta Empire: &quot;Golden Age&quot; of India</li>
                          <li>Advancements in science, mathematics, astronomy, and medicine</li>
                          <li>Flourishing of Sanskrit literature and drama</li>
                          <li>Development of classical Indian art and architecture</li>
                          <li>Decline due to Hun invasions and internal conflicts</li>
                        </ul>
                      </li>
                      <li><strong>Early Medieval India (550-1200 CE):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Rise of regional powers: Chalukyas, Pallavas, Palas</li>
                          <li>Development of regional languages and literature</li>
                          <li>Expansion of Indian culture to Southeast Asia</li>
                          <li>Growth of Bhakti movement in Hinduism</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="medieval">
                  <AccordionTrigger>Medieval India (1200 - 1750 CE)</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Delhi Sultanate (1206-1526 CE):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Five dynasties: Mamluk, Khalji, Tughlaq, Sayyid, Lodi</li>
                          <li>Introduction of Islamic architecture (e.g., Qutub Minar)</li>
                          <li>Administrative reforms and land revenue system</li>
                          <li>Cultural synthesis of Indo-Islamic traditions</li>
                        </ul>
                      </li>
                      <li><strong>Vijayanagara Empire (1336-1646 CE):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Hindu empire in South India</li>
                          <li>Patronage of art, literature, and architecture</li>
                          <li>Hampi, the capital city, a UNESCO World Heritage site</li>
                          <li>Decline after the Battle of Talikota (1565)</li>
                        </ul>
                      </li>
                      <li><strong>Mughal Empire (1526-1857 CE):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Founded by Babur, expanded under Akbar</li>
                          <li>Peak under Akbar, Jahangir, Shah Jahan, and Aurangzeb</li>
                          <li>Administrative reforms and land revenue system (Mansabdari)</li>
                          <li>Cultural achievements: Taj Mahal, Red Fort, Mughal paintings</li>
                          <li>Religious policies: Din-i-Ilahi, Jizya tax</li>
                          <li>Decline after Aurangzeb&apos;s death, British East India Company&apos;s rise</li>
                        </ul>
                      </li>
                      <li><strong>Maratha Empire (1674-1818 CE):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Founded by Shivaji Bhonsle</li>
                          <li>Expansion under Peshwas</li>
                          <li>Guerrilla warfare tactics</li>
                          <li>Decline due to internal conflicts and British expansion</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="colonial">
                  <AccordionTrigger>Colonial India (1750 - 1947)</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>East India Company Rule (1757-1858):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Battle of Plassey (1757): Beginning of British political presence</li>
                          <li>Expansion through subsidiary alliances and doctrine of lapse</li>
                          <li>Economic exploitation: drain of wealth</li>
                          <li>Social reforms: abolition of Sati, promotion of English education</li>
                          <li>Indian Rebellion of 1857</li>
                        </ul>
                      </li>
                      <li><strong>British Raj (1858-1947):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Direct rule by British Crown</li>
                          <li>Administrative reforms: Indian Civil Service</li>
                          <li>Economic changes: railways, telegraphs, modern industries</li>
                          <li>Social reforms: age of consent, widow remarriage</li>
                          <li>Partition of Bengal (1905) and its reversal (1911)</li>
                          <li>World War I and its impact on India</li>
                          <li>Rise of nationalist movement</li>
                          <li>World War II and its impact on India&apos;s independence</li>
                        </ul>
                      </li>
                      <li><strong>Indian Independence Movement:</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Early nationalist organizations: Indian National Congress (1885)</li>
                          <li>Partition of Bengal and Swadeshi movement (1905-1911)</li>
                          <li>Home Rule Movement (1916-1918)</li>
                          <li>Non-Cooperation Movement (1920-1922)</li>
                          <li>Civil Disobedience Movement (1930-1934)</li>
                          <li>Quit India Movement (1942)</li>
                          <li>Indian National Army under Subhas Chandra Bose</li>
                          <li>Cabinet Mission Plan (1946)</li>
                          <li>Mountbatten Plan and Indian Independence Act (1947)</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="modern">
                  <AccordionTrigger>Modern India (1947 - Present)</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Independence and Partition (1947):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>India gains independence on August 15, 1947</li>
                          <li>Partition of India and Pakistan</li>
                          <li>Large-scale migration and communal violence</li>
                          <li>Integration of princely states</li>
                        </ul>
                      </li>
                      <li><strong>Nehru Era (1947-1964):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Implementation of Five-Year Plans</li>
                          <li>Non-Aligned Movement in foreign policy</li>
                          <li>Establishment of public sector industries</li>
                          <li>Linguistic reorganization of states (1956)</li>
                        </ul>
                      </li>
                      <li><strong>Green Revolution and Wars (1965-1971):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Indo-Pakistan War (1965)</li>
                          <li>Green Revolution in agriculture</li>
                          <li>Indo-Pakistan War and creation of Bangladesh (1971)</li>
                        </ul>
                      </li>
                      <li><strong>Emergency and Post-Emergency Era (1975-1991):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>National Emergency (1975-1977)</li>
                          <li>Janata Party government (1977-1979)</li>
                          <li>Return of Congress under Indira Gandhi</li>
                          <li>Operation Blue Star and assassination of Indira Gandhi (1984)</li>
                          <li>Anti-Sikh riots (1984)</li>
                          <li>Rajiv Gandhi&apos;s prime ministership (1984-1989)</li>
                        </ul>
                      </li>
                      <li><strong>Economic Liberalization (1991-Present):</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Economic reforms under P.V. Narasimha Rao</li>
                          <li>Rise of coalition politics</li>
                          <li>Nuclear tests (1998)</li>
                          <li>Kargil War (1999)</li>
                          <li>Rapid economic growth and technological advancements</li>
                          <li>Rise of India as a global power</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="culture">
          <Card>
            <CardHeader>
              <CardTitle>Cultural Diversity of India</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="languages">
                  <AccordionTrigger>Languages</AccordionTrigger>
                  <AccordionContent>
                    <p>India is home to 22 officially recognized languages and hundreds of dialects. The linguistic diversity is categorized into language families:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li><strong>Indo-Aryan Languages:</strong> Hindi, Bengali, Marathi, Urdu, Gujarati, Punjabi, Odia, Assamese</li>
                      <li><strong>Dravidian Languages:</strong> Tamil, Telugu, Kannada, Malayalam</li>
                      <li><strong>Austro-Asiatic Languages:</strong> Santali, Khasi</li>
                      <li><strong>Tibeto-Burman Languages:</strong> Bodo, Manipuri</li>
                    </ul>
                    <p className="mt-2">Hindi, written in the Devanagari script, is the official language of the Indian government and is spoken by about 44% of the population. English is also widely used for official and business purposes.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="religions">
                  <AccordionTrigger>Religions</AccordionTrigger>
                  <AccordionContent>
                    <p>India is a secular country with diverse religious practices:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li><strong>Hinduism (79.8%):</strong> The oldest and most widely practiced religion in India, with a rich pantheon of gods and goddesses, and diverse philosophical traditions.</li>
                      <li><strong>Islam (14.2%):</strong> The second-largest religion, with significant cultural and historical influence, particularly in architecture and cuisine.</li>
                      <li><strong>Christianity (2.3%):</strong> Practiced mainly in the Northeast, Goa, and Kerala, with a history dating back to the 1st century CE.</li>
                      <li><strong>Sikhism (1.7%):</strong> Originated in Punjab in the 15th century, known for its emphasis on equality and community service.</li>
                      <li><strong>Buddhism (0.7%):</strong> Originated in India, with significant historical and cultural impact, though now practiced by a small percentage.</li>
                      <li><strong>Jainism (0.4%):</strong> An ancient Indian religion emphasizing non-violence and asceticism.</li>
                      <li><strong>Others:</strong> Zoroastrianism, Judaism, Bahá&apos;í Faith, and various tribal religions.</li>
                    </ul>
                    <p className="mt-2">This religious diversity has led to a rich tapestry of festivals, traditions, and cultural practices across the country.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="arts">
                  <AccordionTrigger>Arts and Literature</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Classical Music:</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Hindustani (North Indian): Khayal, Dhrupad, Thumri styles</li>
                          <li>Carnatic (South Indian): Kriti, Varnam, Tillana forms</li>
                          <li>Instruments: Sitar, Tabla, Veena, Mridangam</li>
                        </ul>
                      </li>
                      <li><strong>Dance Forms:</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Classical: Bharatanatyam, Kathak, Odissi, Kuchipudi, Manipuri, Kathakali, Mohiniyattam, Sattriya</li>
                          <li>Folk: Bhangra, Garba, Bihu, Ghoomar, and many regional forms</li>
                        </ul>
                      </li>
                      <li><strong>Visual Arts:</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Paintings: Madhubani, Warli, Tanjore, Miniature paintings</li>
                          <li>Sculptures: From ancient stone carvings to modern installations</li>
                          <li>Textiles: Embroidery, block printing, weaving traditions</li>
                        </ul>
                      </li>
                      <li><strong>Literature:</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Ancient texts: Vedas, Upanishads, Ramayana, Mahabharata</li>
                          <li>Classical Sanskrit literature: Works of Kalidasa, Bhasa</li>
                          <li>Medieval Bhakti poetry: Kabir, Mirabai, Tulsidas</li>
                          <li>Modern literature: Rabindranath Tagore, Premchand, R.K. Narayan</li>
                        </ul>
                      </li>
                      <li><strong>Cinema:</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Bollywood: Hindi film industry based in Mumbai</li>
                          <li>Regional cinema: Tamil, Telugu, Bengali, Malayalam, and other language films</li>
                          <li>Parallel Cinema: Art house and independent films</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="festivals">
                  <AccordionTrigger>Festivals and Traditions</AccordionTrigger>
                  <AccordionContent>
                    <p>India celebrates numerous festivals throughout the year, reflecting its cultural and religious diversity:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li><strong>Diwali:</strong> Festival of Lights, celebrated by Hindus, Sikhs, and Jains</li>
                      <li><strong>Holi:</strong> Festival of Colors, marking the arrival of spring</li>
                      <li><strong>Eid al-Fitr and Eid al-Adha:</strong> Major Islamic festivals</li>
                      <li><strong>Christmas:</strong> Celebrated by Christians and many non-Christians</li>
                      <li><strong>Guru Nanak Jayanti:</strong> Birth anniversary of the first Sikh Guru</li>
                      <li><strong>Durga Puja:</strong> Major festival in Bengal, celebrating the goddess Durga</li>
                      <li><strong>Onam:</strong> Harvest festival of Kerala</li>
                      <li><strong>Pongal:</strong> Harvest festival of Tamil Nadu</li>
                      <li><strong>Bihu:</strong> Assamese New Year celebrations</li>
                      <li><strong>Ganesh Chaturthi:</strong> Festival honoring Lord Ganesha, especially popular in Maharashtra</li>
                    </ul>
                    <p className="mt-2">These festivals often involve unique traditions, rituals, special foods, and community gatherings, contributing to India&apos;s vibrant cultural tapestry.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cuisine">
                  <AccordionTrigger>Cuisine</AccordionTrigger>
                  <AccordionContent>
                    <p>Indian cuisine is known for its diversity, use of spices, and regional variations:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li><strong>North Indian:</strong> Known for tandoori dishes, rich curries, and breads like naan and roti</li>
                      <li><strong>South Indian:</strong> Features rice-based dishes, dosas, idlis, and coconut-infused curries</li>
                      <li><strong>East Indian:</strong> Known for fish dishes, rice, and sweets</li>
                      <li><strong>West Indian:</strong> Features vegetarian Gujarati thalis and spicy Maharashtrian cuisine</li>
                      <li><strong>Central Indian:</strong> Known for wheat-based dishes and unique chutneys</li>
                      <li><strong>Northeast Indian:</strong> Characterized by simple, flavorful preparations and use of fermented foods</li>
                    </ul>
                    <p className="mt-2">Common elements across regions include the use of spices like turmeric, cumin, and coriander, as well as the importance of vegetarian cuisine influenced by religious and cultural practices.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </ProtectedPage>
  );
}
