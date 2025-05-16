import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import {
  ChevronRight,
  Dumbbell,
  Sparkles,
  Users,
  Clock,
  AppleIcon,
  ShieldIcon,
} from "lucide-react";
import { USER_PROGRAMS } from "../constants";

const UserPrograms = () => {
  return (
    <div className="w-full pb-16 md:pb-24 pt-12 md:pt-16 relative">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* HEADER- PROGRAM GALLERY */}
        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden mb-12 md:mb-16">
          {/* HEADER BAR */}
          <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-5 py-3 border-b border-border bg-background/70 space-y-2 sm:space-y-0">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              <span className="text-sm text-primary font-medium">Program Gallery</span>
            </div>
            <div className="text-sm text-muted-foreground">Featured Plans</div>
          </div>

          {/* HEADER CONTENT */}
          <div className="p-4 md:p-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-foreground">AI-Crafted </span>
              <span className="text-primary">Workout Plans</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-6 md:mb-10">
              Discover smart and efficient fitness routines tailored by our AI engine
            </p>

            {/* STATS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 mt-6 md:mt-10 font-mono">
              <div className="flex flex-col items-center">
                <p className="text-2xl md:text-3xl text-primary">500+</p>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  PROGRAMS
                </p>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <p className="text-2xl md:text-3xl text-primary">2min</p>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  CREATION TIME
                </p>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <p className="text-2xl md:text-3xl text-primary">100%</p>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  PERSONALIZED
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {USER_PROGRAMS.map((program) => (
            <Card
              key={program.id}
              className="bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors overflow-hidden"
            >
              {/* Card header with user info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-3 sm:px-4 py-2 border-b border-border bg-background/70 space-y-1 sm:space-y-0">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-primary">USER.{program.id}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {program.fitness_level.toUpperCase()}
                </div>
              </div>

              <CardHeader className="pt-4 sm:pt-6 px-4 sm:px-5">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full overflow-hidden border border-border">
                    <img
                      src={program.profilePic}
                      alt={`${program.first_name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg sm:text-xl text-foreground">
                      {program.first_name}
                      <span className="text-primary">.exe</span>
                    </CardTitle>
                    <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                      {program.age}y • {program.workout_days}d/week
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                  <div className="px-2 sm:px-3 py-1 bg-primary/10 rounded border border-primary/20 text-xs sm:text-sm text-primary flex items-center gap-2">
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                    {program.fitness_goal}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    v3.5
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-4 sm:px-5">
                {/* Program details */}
                <div className="space-y-4 sm:space-y-5 pt-2">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="p-1 sm:p-2 rounded-md bg-primary/10 text-primary mt-0.5">
                      <Dumbbell className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm sm:text-base font-medium text-foreground">
                          {program.workout_plan.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        {program.equipment_access}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="p-1 sm:p-2 rounded-md bg-secondary/10 text-secondary mt-0.5">
                      <AppleIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm sm:text-base font-medium text-foreground">
                          {program.diet_plan.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        System optimized nutrition
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="p-1 sm:p-2 rounded-md bg-primary/10 text-primary mt-0.5">
                      <ShieldIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm sm:text-base font-medium text-foreground">
                          AI Safety Protocols
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        Protection systems enabled
                      </p>
                    </div>
                  </div>
                </div>

                {/* Program description */}
                <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-border">
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    <span className="text-primary">&gt; </span>
                    {program.workout_plan.description.substring(0, 100)}...
                  </div>
                </div>
              </CardContent>

              <CardFooter className="px-4 sm:px-5 py-3 sm:py-4 border-t border-border">
                <Link href={`/programs/${program.id}`} className="w-full">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base">
                    View Details
                    <ChevronRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-12 md:mt-16 text-center">
          <Link href="/generate-program">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg"
            >
              Generate Your Program
              <Sparkles className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4">
            Join 500+ users with AI-customized fitness programs
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPrograms;