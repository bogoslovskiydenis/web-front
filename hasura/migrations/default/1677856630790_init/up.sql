SET check_function_bodies = false;
COMMENT ON SCHEMA public IS '';
CREATE TABLE public.menu (
    id integer NOT NULL,
    image text NOT NULL,
    title text NOT NULL,
    weight numeric NOT NULL,
    description text NOT NULL,
    price numeric NOT NULL
);
CREATE SEQUENCE public.menu_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.menu_id_seq OWNED BY public.menu.id;
ALTER TABLE ONLY public.menu ALTER COLUMN id SET DEFAULT nextval('public.menu_id_seq'::regclass);
ALTER TABLE ONLY public.menu
    ADD CONSTRAINT menu_pkey PRIMARY KEY (id);
