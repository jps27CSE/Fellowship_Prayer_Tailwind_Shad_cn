import AvailableGroupCards from "@/components/AvailableGroupCards";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Skeleton } from "@/components/ui/skeleton";

const AvailableGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const { data, error } = await supabase.from("groups").select("*");

        console.log(data);
        if (error) {
          console.error("Failed to fetch groups", error);
          return;
        }

        setGroups(data);
      } catch (error) {
        console.log("Failed to fetch groups", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGroups();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  if (groups.length === 0) {
    return (
      <p className="text-gray-900 dark:text-white">No groups available.</p>
    );
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Available Groups
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-1 gap-6">
        {groups.map((group) => (
          <AvailableGroupCards group={group} key={group.id} />
        ))}
      </div>
    </div>
  );
};

export default AvailableGroups;
