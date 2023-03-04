SET check_function_bodies = false;
INSERT INTO public.menu (id, image, title, weight, description, price) VALUES (1, 'burger.jpeg', 'Title', 23131, 'description', 123);
SELECT pg_catalog.setval('public.menu_id_seq', 1, true);
