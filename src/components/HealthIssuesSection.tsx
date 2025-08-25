import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"
import { ChevronRight, Heart, Stethoscope, Target, ArrowRight } from "lucide-react"
import { useState } from "react"

export function HealthIssuesSection() {
  const [selectedCondition, setSelectedCondition] = useState("")

  const healthConditions = [
    {
      id: "obesity",
      name: "Obesity & Weight Management",
      description: "Sustainable weight loss through metabolic healing",
      category: "Metabolic",
      route: "challenges/obesity"
    },
    {
      id: "diabetes",
      name: "Type 2 Diabetes",
      description: "Blood sugar control and insulin sensitivity",
      category: "Metabolic",
      route: "challenges/diabetes"
    },
    {
      id: "cholesterol",
      name: "High Cholesterol",
      description: "Natural cholesterol management and heart health",
      category: "Cardiovascular",
      route: "challenges/cholesterol"
    },
    {
      id: "fatigue",
      name: "Chronic Fatigue",
      description: "Energy restoration and vitality recovery",
      category: "Energy",
      route: "challenges/fatigue"
    },
    {
      id: "pain",
      name: "Chronic Pain & Inflammation",
      description: "Anti-inflammatory healing protocols",
      category: "Inflammatory",
      route: "challenges/pain"
    },
    {
      id: "autoimmune",
      name: "Autoimmune Conditions",
      description: "Immune system balance and healing",
      category: "Immune",
      route: "challenges/autoimmune"
    },
    {
      id: "gerd",
      name: "GERD & Acid Reflux",
      description: "Digestive healing and symptom relief",
      category: "Digestive",
      route: "challenges/gerd"
    },
    {
      id: "ibs",
      name: "IBS & Digestive Issues",
      description: "Gut health restoration and symptom management",
      category: "Digestive",
      route: "challenges/ibs"
    },
    {
      id: "food-intolerances",
      name: "Food Intolerances",
      description: "Identify triggers and heal sensitivities",
      category: "Digestive",
      route: "challenges/food-intolerances"
    },
    {
      id: "gut-dysbiosis",
      name: "Gut Dysbiosis",
      description: "Microbiome restoration and balance",
      category: "Digestive",
      route: "challenges/gut-dysbiosis"
    },
    {
      id: "hypothyroidism",
      name: "Hypothyroidism",
      description: "Thyroid function optimization",
      category: "Hormonal",
      route: "challenges/hypothyroidism"
    },
    {
      id: "hashimotos",
      name: "Hashimoto's Thyroiditis",
      description: "Autoimmune thyroid healing approach",
      category: "Hormonal",
      route: "challenges/hashimotos"
    },
    {
      id: "acne",
      name: "Acne & Skin Issues",
      description: "Clear skin through internal healing",
      category: "Dermatological",
      route: "challenges/acne"
    },
    {
      id: "eczema",
      name: "Eczema",
      description: "Skin healing and inflammation reduction",
      category: "Dermatological",
      route: "challenges/eczema"
    },
    {
      id: "psoriasis",
      name: "Psoriasis",
      description: "Autoimmune skin condition management",
      category: "Dermatological",
      route: "challenges/psoriasis"
    },
    {
      id: "nafld",
      name: "NAFLD (Fatty Liver)",
      description: "Liver health restoration and detox",
      category: "Metabolic",
      route: "challenges/nafld"
    },
    {
      id: "pcos",
      name: "PCOS",
      description: "Hormonal balance and metabolic healing",
      category: "Hormonal",
      route: "challenges/pcos"
    }
  ]

  const categories = [...new Set(healthConditions.map(condition => condition.category))]

  const handleConditionSelect = (conditionId: string) => {
    setSelectedCondition(conditionId)
    const condition = healthConditions.find(c => c.id === conditionId)
    if (condition) {
      window.location.hash = condition.route
    }
  }

  const handleViewAllConditions = () => {
    // Could navigate to a conditions overview page if needed
    console.log("View all conditions")
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 via-transparent to-gray-100"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gray-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gray-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-6">
            <Stethoscope className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-medium text-gray-700">Evidence-Based Healing</span>
          </div>

          <h2 className="wellness-heading-main text-black mb-6">
            Health Issues We <span className="wellness-heading-emphasis energy-blue">Successfully Reverse</span>
          </h2>

          <p className="wellness-content-text text-gray-700 max-w-4xl mx-auto mb-8">
            Choose your primary health concern to see how our evidence-based nutrition approach can help you achieve lasting healing and transformation.
          </p>
        </div>

        {/* Main Selection Area */}
        <div className="max-w-2xl mx-auto">
          {/* Condition Selector */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
            <div className="text-center mb-6">
              <Target className="w-8 h-8 text-gray-700 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Select Your Health Concern</h3>
              <p className="text-sm text-gray-600">Find personalized solutions for your specific health challenge</p>
            </div>

            <div className="space-y-4">
              <Select onValueChange={handleConditionSelect} value={selectedCondition}>
                <SelectTrigger className="w-full h-14 bg-gray-50 border-gray-200 rounded-xl text-left hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-gray-600" />
                    <SelectValue placeholder="Choose your primary health issue..." className="text-gray-500" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200 rounded-xl shadow-xl">
                  {categories.map(category => (
                    <div key={category} className="p-2">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 py-1 mb-1">
                        {category}
                      </div>
                      {healthConditions
                        .filter(condition => condition.category === category)
                        .map(condition => (
                          <SelectItem 
                            key={condition.id} 
                            value={condition.id}
                            className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer group"
                          >
                            <div className="flex items-center justify-between w-full">
                              <div>
                                <div className="font-medium text-gray-900 group-hover:text-black">
                                  {condition.name}
                                </div>
                                <div className="text-xs text-gray-500 mt-0.5">
                                  {condition.description}
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                            </div>
                          </SelectItem>
                        ))}
                    </div>
                  ))}
                </SelectContent>
              </Select>

              {selectedCondition && (
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    onClick={() => handleConditionSelect(selectedCondition)}
                    className="flex-1 bg-black text-white hover:bg-gray-800 h-12 rounded-xl font-medium group"
                  >
                    Learn More About This Condition
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-300 text-black hover:bg-gray-50 h-12 rounded-xl font-medium"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              )}
            </div>
          </div>



          {/* Professional Message */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-600">
              <Heart className="w-4 h-4" />
              <span>Don't see your condition? We treat many more health issues.</span>
              <button 
                onClick={handleViewAllConditions}
                className="energy-blue hover:underline font-medium"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center border border-gray-100">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-6">
              <Target className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Free Health Assessment</span>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Not Sure Which Condition You Have?
            </h3>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our comprehensive health assessment will help identify the root causes of your symptoms and create a personalized healing plan tailored specifically for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.hash = 'contact'}
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                Take Free Assessment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}