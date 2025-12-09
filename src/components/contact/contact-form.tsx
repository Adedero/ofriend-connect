"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { data } from "@/content/pages/contact";
import { Button } from "../ui/button";
import {
  contactFormDefaultValues,
  contactFormSchema,
  ContactFormType,
} from "@/zod-schemas/contact-form.schema";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { products } from "@/content/components/products";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaultValues,
  });

  function onSubmit(data: ContactFormType) {
    console.log(data);
  }
  return (
    <div className="flex flex-col items-center p-5 lg:p-8">
      <div className="w-full max-w-96">
        <header>
          <h3 className="font-bold text-3xl">{data.contactForm.headline}</h3>
        </header>

        <form
          id="contact-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 mt-5"
        >
          <FieldGroup className="gap-y-4">
            <Controller
              name="fullName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-y-2">
                  <FieldLabel htmlFor="contact-form-full-name">
                    Full Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="contact-form-full-name"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-y-2">
                  <FieldLabel htmlFor="contact-form-email">
                    Email Address
                  </FieldLabel>
                  <Input
                    {...field}
                    id="contact-form-email"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="product"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-y-2">
                  <FieldLabel htmlFor="contact-form-product">
                    Product
                  </FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="contact-form-product"
                      aria-invalid={fieldState.invalid}
                    >
                      <SelectValue placeholder="Select product" />
                      <SelectContent>
                        {products.map((product) => (
                          <SelectItem key={product.key} value={product.name}>
                            {product.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </SelectTrigger>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-y-2">
                  <FieldLabel htmlFor="contact-form-messsage">
                    Messsage
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="contact-form-messsage"
                    aria-invalid={fieldState.invalid}
                    
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
