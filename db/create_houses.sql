-- Table: public.houses

-- DROP TABLE public.houses;

CREATE TABLE public.houses
(
    id integer NOT NULL DEFAULT nextval('houses_id_seq'::regclass) ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name character varying(30) COLLATE pg_catalog."default",
    address character varying(100) COLLATE pg_catalog."default",
    city character varying(100) COLLATE pg_catalog."default",
    state character varying(2) COLLATE pg_catalog."default",
    img text COLLATE pg_catalog."default",
    mortgage money,
    rent money,
    CONSTRAINT houses_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.houses
    OWNER to nlzytwkcjynbnj;