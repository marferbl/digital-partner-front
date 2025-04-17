import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { X, Plus, Loader2 } from "lucide-react";
import { insertTalentSchema } from "../utils/schema"
import { useToast } from "../hooks/use-toast";
import { createTalent } from "../services/freelance";
import { useLocation } from "react-router-dom";

// Extend the schema with validation rules
const formSchema = insertTalentSchema.extend({
  email: z.string().email("Email inválido"),
  fullName: z.string().min(3, "Nombre completo debe tener al menos 3 caracteres"),
  country: z.string().min(2, "País es requerido"),
  city: z.string().min(2, "Ciudad es requerida"),
  job: z.string().min(2, "Posición es requerida"),
});

export default function TalentForm() {
  const [activeTab, setActiveTab] = useState("personal");
  const [skillInput, setSkillInput] = useState("");
  const [techInput, setTechInput] = useState("");
  const [techLevel, setTechLevel] = useState("Básico");
  const [languageInput, setLanguageInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  const [location, navigate] = useLocation();
  
  // Initialize form with default values
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      country: "",
      city: "",
      job: "",
      email: "",
      introduction: "",
      aboutMe: "",
      web: "",
      telephone: "",
      skills: [],
      languages: [],
      technologies: [],
      prefferedWork: [],
      openPrefferedWork: false,
      salary: 0,
      openSalary: false,
      studies: [],
      experience: []
    }
  });
  
  const watchSkills = form.watch("skills");
  const watchTechnologies = form.watch("technologies");
  const watchLanguages = form.watch("languages");
  const watchPreferredWork = form.watch("prefferedWork");
  
  // Handle skill input
  const handleAddSkill = () => {
    if (skillInput.trim() === "") return;
    
    if (!watchSkills.includes(skillInput.trim())) {
      form.setValue("skills", [...watchSkills, skillInput.trim()]);
    }
    
    setSkillInput("");
  };
  
  // Handle technology input
  const handleAddTechnology = () => {
    if (techInput.trim() === "") return;
    
    const newTech = {
      name: techInput.trim(),
      level: techLevel
    };
    
    const exists = watchTechnologies.some(tech => tech.name === techInput.trim());
    
    if (!exists) {
      form.setValue("technologies", [...watchTechnologies, newTech]);
    }
    
    setTechInput("");
  };
  
  // Handle language input
  const handleAddLanguage = () => {
    if (languageInput.trim() === "") return;
    
    if (!watchLanguages.includes(languageInput.trim())) {
      form.setValue("languages", [...watchLanguages, languageInput.trim()]);
    }
    
    setLanguageInput("");
  };
  
  // Handle work preference
  const handleWorkPreference = (preference) => {
    const preferences = [...watchPreferredWork];
    
    if (preferences.includes(preference)) {
      form.setValue("prefferedWork", preferences.filter(p => p !== preference));
    } else {
      form.setValue("prefferedWork", [...preferences, preference]);
    }
  };
  
  // Remove items from arrays
  const removeSkill = (skill) => {
    form.setValue("skills", watchSkills.filter(s => s !== skill));
  };
  
  const removeTechnology = (techName) => {
    form.setValue("technologies", watchTechnologies.filter(t => t.name !== techName));
  };
  
  const removeLanguage = (language) => {
    form.setValue("languages", watchLanguages.filter(l => l !== language));
  };
  
  // Form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, you'd get the userId from auth context
      const userId = 1; // Hardcoded for demo
      
      const response = await createTalent({
        ...data,
        userId
      });
      
      if (response.status === 200 || response.status === 201) {
        toast({
          title: "Perfil creado con éxito",
          description: "Tu perfil de talento ha sido creado correctamente.",
        });
        
        navigate("/");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al crear tu perfil. Inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Crea tu perfil de talento</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="personal">Información Personal</TabsTrigger>
                  <TabsTrigger value="skills">Habilidades</TabsTrigger>
                  <TabsTrigger value="experience">Experiencia</TabsTrigger>
                  <TabsTrigger value="preferences">Preferencias</TabsTrigger>
                </TabsList>
                
                {/* Personal Information Tab */}
                <TabsContent value="personal" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. Ana García" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="tu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="job"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Posición</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. Desarrollador Frontend" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="telephone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. +34 612 345 678" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>País</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. España" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ciudad</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. Madrid" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="web"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sitio Web</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. tuportfolio.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name="introduction"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Introducción Breve</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Una breve introducción profesional (se mostrará en las tarjetas)" 
                                {...field} 
                                className="min-h-[80px]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name="aboutMe"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sobre Mí</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe tu perfil profesional con más detalle" 
                                {...field} 
                                className="min-h-[150px]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="button" onClick={() => setActiveTab("skills")}>
                      Siguiente
                    </Button>
                  </div>
                </TabsContent>
                
                {/* Skills Tab */}
                <TabsContent value="skills" className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Habilidades</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {watchSkills.map((skill, i) => (
                          <Badge key={i} className="flex items-center gap-1 px-3 py-1.5">
                            {skill}
                            <button 
                              type="button" 
                              onClick={() => removeSkill(skill)} 
                              className="text-xs"
                            >
                              <X size={14} />
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Añadir habilidad"
                          value={skillInput}
                          onChange={e => setSkillInput(e.target.value)}
                          onKeyDown={e => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddSkill();
                            }
                          }}
                        />
                        <Button type="button" variant="outline" onClick={handleAddSkill}>
                          <Plus size={16} />
                        </Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Tecnologías</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {watchTechnologies.map((tech, i) => (
                          <Badge key={i} className="flex items-center gap-1 px-3 py-1.5">
                            {tech.name} - {tech.level}
                            <button 
                              type="button" 
                              onClick={() => removeTechnology(tech.name)} 
                              className="text-xs"
                            >
                              <X size={14} />
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                        <div className="md:col-span-2">
                          <Input
                            placeholder="Añadir tecnología"
                            value={techInput}
                            onChange={e => setTechInput(e.target.value)}
                            onKeyDown={e => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAddTechnology();
                              }
                            }}
                          />
                        </div>
                        <div>
                          <select 
                            className="w-full h-10 px-3 rounded-md border border-input"
                            value={techLevel}
                            onChange={e => setTechLevel(e.target.value)}
                          >
                            <option value="Básico">Básico</option>
                            <option value="Intermedio">Intermedio</option>
                            <option value="Avanzado">Avanzado</option>
                          </select>
                        </div>
                        <div>
                          <Button type="button" variant="outline" onClick={handleAddTechnology} className="w-full">
                            <Plus size={16} className="mr-2" /> Añadir
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Idiomas</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {watchLanguages.map((lang, i) => (
                          <Badge key={i} className="flex items-center gap-1 px-3 py-1.5">
                            {lang}
                            <button 
                              type="button" 
                              onClick={() => removeLanguage(lang)} 
                              className="text-xs"
                            >
                              <X size={14} />
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Añadir idioma"
                          value={languageInput}
                          onChange={e => setLanguageInput(e.target.value)}
                          onKeyDown={e => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddLanguage();
                            }
                          }}
                        />
                        <Button type="button" variant="outline" onClick={handleAddLanguage}>
                          <Plus size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab("personal")}>
                      Anterior
                    </Button>
                    <Button type="button" onClick={() => setActiveTab("experience")}>
                      Siguiente
                    </Button>
                  </div>
                </TabsContent>
                
                {/* Experience Tab */}
                <TabsContent value="experience" className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Experiencia y Estudios</h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Esta sección está simplificada para la demostración. En una aplicación real, aquí podrías añadir experiencias laborales y estudios de forma detallada.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab("skills")}>
                      Anterior
                    </Button>
                    <Button type="button" onClick={() => setActiveTab("preferences")}>
                      Siguiente
                    </Button>
                  </div>
                </TabsContent>
                
                {/* Preferences Tab */}
                <TabsContent value="preferences" className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Preferencias de trabajo</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                        {["Remoto", "Híbrido", "Presencial", "Por horas", "Media jornada", "Jornada completa"].map((preference) => (
                          <div key={preference} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={preference}
                              checked={watchPreferredWork.includes(preference)}
                              onChange={() => handleWorkPreference(preference)}
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor={preference} className="text-sm font-medium text-gray-700">
                              {preference}
                            </label>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <FormField
                          control={form.control}
                          name="openPrefferedWork"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                              <FormControl>
                                <Switch 
                                  checked={field.value} 
                                  onCheckedChange={field.onChange} 
                                />
                              </FormControl>
                              <FormLabel className="text-sm text-gray-500">
                                Mostrar mis preferencias de trabajo en mi perfil
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Expectativas salariales</h3>
                      <FormField
                        control={form.control}
                        name="salary"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Salario anual esperado (€)</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                placeholder="Ej. 40000" 
                                onChange={e => field.onChange(parseInt(e.target.value) || 0)} 
                                value={field.value}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex items-center space-x-2 mt-4">
                        <FormField
                          control={form.control}
                          name="openSalary"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                              <FormControl>
                                <Switch 
                                  checked={field.value} 
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormLabel className="text-sm text-gray-500">
                                Mostrar mis expectativas salariales en mi perfil
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab("experience")}>
                      Anterior
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Guardar perfil
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}