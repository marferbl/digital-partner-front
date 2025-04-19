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
import SearchSelectCountries from "./base/search-select-countries";
import SearchSelectPositions from "./base/search-select-positions";

// Define the form schema for validation
const searchSchema = z.object({
  job: z.string().optional(),
  city: z.string().optional(),
  salary: z.string().optional(),
  technologies: z.array(z.string()).default([]),
  country: z.string().optional(),
});

export default function SearchFilters({ onSearch, initialValues }) {
  const [techInput, setTechInput] = useState("");
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  
  // Initialize form with default or initial values
  const form = useForm({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      job: initialValues?.job || "",
      city: initialValues?.city || "",
      salary: initialValues?.salary || "any",
      technologies: initialValues?.technologies || [],
      country: initialValues?.country || "",
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
              <SearchSelectPositions showLabel onChange={(value) => form.setValue('job', value)} theme='light' />    
              </div>
              
              <div className="w-full md:w-auto flex-grow-0 flex-shrink-0 min-w-[200px]">
              <SearchSelectCountries
                                showLabel
                                width="100%"
                                onChange={(value) => {form.setValue('country', value);}}
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