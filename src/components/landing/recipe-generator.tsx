"use client";

import { useState } from 'react';
import type { FormEvent } from 'react';
import { generateRecipeIdea } from '@/ai/flows/empek-empek-recipe-ideas';
import type { RecipeIdeaOutput } from '@/ai/flows/empek-empek-recipe-ideas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Loader2, Wand2, Lightbulb } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"


export default function RecipeGenerator() {
  const [trend, setTrend] = useState('');
  const [recipe, setRecipe] = useState<RecipeIdeaOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!trend) {
       toast({
        title: "Input Kosong",
        description: "Silakan masukkan tren atau bahan.",
        variant: "destructive",
      })
      return;
    }
    setLoading(true);
    setRecipe(null);
    try {
      const result = await generateRecipeIdea({ trend });
      setRecipe(result);
    } catch (err) {
      toast({
        title: "Gagal Membuat Resep",
        description: "Maaf, terjadi kesalahan saat mencoba membuat resep. Silakan coba lagi nanti.",
        variant: "destructive",
      })
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="resep-ai" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
              Butuh Ide Resep Empek-Empek?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Masukkan tren makanan atau bahan musiman yang Anda miliki, dan biarkan AI kami menciptakan resep Empek-Empek yang unik dan lezat untuk Anda.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
              <Input
                value={trend}
                onChange={(e) => setTrend(e.target.value)}
                placeholder="contoh: 'musim mangga', 'tren keju'"
                className="text-base"
                disabled={loading}
              />
              <Button type="submit" disabled={loading} size="lg">
                {loading ? <Loader2 className="animate-spin" /> : <Wand2 />}
                <span className="ml-2 hidden sm:inline">Buat Resep</span>
              </Button>
            </form>
          </div>
          
          <div className="min-h-[300px] flex items-center justify-center">
            {loading && <Loader2 className="w-16 h-16 animate-spin text-primary" />}
            
            {!loading && !recipe && (
               <div className="text-center text-muted-foreground">
                  <Lightbulb className="w-16 h-16 mx-auto mb-4 text-accent" />
                  <p className="font-semibold">Hasil resep Anda akan muncul di sini.</p>
               </div>
            )}
            
            {recipe && (
              <Card className="w-full bg-accent/20 shadow-lg animate-in fade-in-50">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{recipe.recipeName}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Bahan-bahan:</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{recipe.ingredients}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Cara Membuat:</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{recipe.instructions}</p>
                  </div>
                </CardContent>
                <CardFooter>
                   <p className="text-sm text-foreground italic"><strong className="font-bold">Saran Lauk Pendamping:</strong> {recipe.sideDishSuggestion}</p>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
