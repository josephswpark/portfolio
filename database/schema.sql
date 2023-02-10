set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."sizes" (
	"productId" integer NOT NULL,
	"size" NUMERIC NOT NULL
) WITH (
  OIDS=FALSE
);
