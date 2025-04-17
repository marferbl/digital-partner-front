import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { X, Plus, Search, SlidersHorizontal } from "lucide-react";
import { Card, CardContent } from "./ui/card";

// Define the form schema for validation
const searchSchema = z.object({
  position: z.string().optional(),
  location: z.string().optional(),
  salary: z.string().optional(),
  technologies: z.array(z.string()).default([]),
});

export default function SearchFilters({ onSearch, initialValues }) {
  const [techInput, setTechInput] = useState("");
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  
  // Initialize form with default or initial values
  const form = useForm({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      position: initialValues?.position || "",
      location: initialValues?.location || "",
      salary: initialValues?.salary || "any",
      technologies: initialValues?.technologies || [],
    },
  });
  
  const watchTechnologies = form.watch("technologies");
  
  // Handle technology tag input
  const handleAddTech = () => {
    if (techInput.trim() === "") return;
    
    if (!watchTechnologies.includes(techInput.trim())) {
      form.setValue("technologies", [...watchTechnologies, techInput.trim()]);
    }
    
    setTechInput("");
  };
  
  // Remove a technology tag
  const removeTech = (tech) => {
    form.setValue("technologies", watchTechnologies.filter(t => t !== tech));
  };
  
  // Handle form submission
  const onSubmit = (values) => {
    onSearch(values);
  };
  
  return (
    <Card className="bg-white shadow-sm rounded-lg overflow-hidden">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="flex-grow min-w-[250px]">
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Posición</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <Input 
                            placeholder="Desarrollador Frontend, UX Designer..." 
                            className="pl-10" 
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="w-full md:w-auto flex-grow-0 flex-shrink-0 min-w-[200px]">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Ubicación</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <Input 
                            placeholder="País o ciudad" 
                            className="pl-10" 
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="w-full md:w-auto">
                <Button 
                  type="submit" 
                  className="h-10 mt-[27px] bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Buscar
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="h-8 mt-1 text-sm font-medium text-blue-600 hover:bg-blue-50 hover:text-blue-700 border-blue-200 shadow-sm"
                onClick={() => setShowMoreFilters(!showMoreFilters)}
              >
                <SlidersHorizontal className="h-3.5 w-3.5 mr-1.5" />
                {showMoreFilters ? 'Menos filtros' : 'Más filtros'}
              </Button>
            </div>
            
            {showMoreFilters && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <FormField
                  control={form.control}
                  name="salary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Salario</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un rango" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Cualquier salario</SelectItem>
                          <SelectItem value="30000-">Menos de 30.000€</SelectItem>
                          <SelectItem value="30000-50000">30.000€ - 50.000€</SelectItem>
                          <SelectItem value="50000-70000">50.000€ - 70.000€</SelectItem>
                          <SelectItem value="70000+">Más de 70.000€</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                
                <div>
                  <FormLabel className="text-sm font-medium text-gray-700">Tecnologías</FormLabel>
                  <div className="flex">
                    <Input
                      value={techInput}
                      onChange={(e) => setTechInput(e.target.value)}
                      placeholder="Añadir tecnología..."
                      className="rounded-r-none"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddTech();
                        }
                      }}
                    />
                    <Button
                      type="button"
                      className="rounded-l-none bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={handleAddTech}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {watchTechnologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {watchTechnologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center space-x-1 pr-1">
                          <span>{tech}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="h-4 w-4 p-0 hover:bg-transparent"
                            onClick={() => removeTech(tech)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}