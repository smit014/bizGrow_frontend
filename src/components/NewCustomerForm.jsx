import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2, Plus } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const NewCustomerForm = ({ setCustomers }) => {
  const [fields, setFields] = useState({
    name: undefined,
    companyName: undefined,
    email: undefined,
    phone_no: undefined,
    address: undefined,
  });

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log(fields);
    setCustomers((prev) => [...prev, fields]);
    setIsLoading(false);
    return toast({
      title: "Yay! Success",
      description: "New customer added successfully",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-2">
        <div>
          <Label>Name</Label>
          <Input
            required
            onChange={(e) => setFields({ ...fields, name: e.target.value })}
            value={fields.name}
          />
        </div>
        <div>
          <Label>Company Name</Label>
          <Input
            required
            onChange={(e) =>
              setFields({ ...fields, companyName: e.target.value })
            }
            value={fields.companyName}
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            required
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
            value={fields.email}
          />
        </div>
        <div>
          <Label>Phone No.</Label>
          <Input
            required
            onChange={(e) => setFields({ ...fields, phone_no: e.target.value })}
            value={fields.phone_no}
          />
        </div>
        <div>
          <Label>Address</Label>
          <Input
            required
            onChange={(e) => setFields({ ...fields, address: e.target.value })}
            value={fields.address}
          />
        </div>
        <div className="pt-2">
          <Button
            type="submit"
            className="w-full"
            // onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="h-5 w-5 animate-spin" />}
            Add
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NewCustomerForm;
