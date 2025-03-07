--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Postgres.app)
-- Dumped by pg_dump version 17.2 (Postgres.app)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: firsttable; Type: TABLE; Schema: public; Owner: mimico
--

CREATE TABLE public.firsttable (
    id integer NOT NULL,
    name character varying(50),
    logo_url text
);


ALTER TABLE public.firsttable OWNER TO mimico;

--
-- Name: firsttable_id_seq; Type: SEQUENCE; Schema: public; Owner: mimico
--

CREATE SEQUENCE public.firsttable_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.firsttable_id_seq OWNER TO mimico;

--
-- Name: firsttable_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mimico
--

ALTER SEQUENCE public.firsttable_id_seq OWNED BY public.firsttable.id;


--
-- Name: locations; Type: TABLE; Schema: public; Owner: mimico
--

CREATE TABLE public.locations (
    id integer NOT NULL,
    company_id integer,
    city text NOT NULL,
    province text NOT NULL,
    postal_code text NOT NULL
);


ALTER TABLE public.locations OWNER TO mimico;

--
-- Name: locations_id_seq; Type: SEQUENCE; Schema: public; Owner: mimico
--

CREATE SEQUENCE public.locations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.locations_id_seq OWNER TO mimico;

--
-- Name: locations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mimico
--

ALTER SEQUENCE public.locations_id_seq OWNED BY public.locations.id;


--
-- Name: firsttable id; Type: DEFAULT; Schema: public; Owner: mimico
--

ALTER TABLE ONLY public.firsttable ALTER COLUMN id SET DEFAULT nextval('public.firsttable_id_seq'::regclass);


--
-- Name: locations id; Type: DEFAULT; Schema: public; Owner: mimico
--

ALTER TABLE ONLY public.locations ALTER COLUMN id SET DEFAULT nextval('public.locations_id_seq'::regclass);


--
-- Data for Name: firsttable; Type: TABLE DATA; Schema: public; Owner: mimico
--

COPY public.firsttable (id, name, logo_url) FROM stdin;
1	Magna International	\N
2	Imperial Oil	\N
3	Nutrien	\N
4	Jenny Bird	\N
5	MSW Plastics	\N
\.


--
-- Data for Name: locations; Type: TABLE DATA; Schema: public; Owner: mimico
--

COPY public.locations (id, company_id, city, province, postal_code) FROM stdin;
\.


--
-- Name: firsttable_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mimico
--

SELECT pg_catalog.setval('public.firsttable_id_seq', 5, true);


--
-- Name: locations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mimico
--

SELECT pg_catalog.setval('public.locations_id_seq', 1, false);


--
-- Name: firsttable firsttable_pkey; Type: CONSTRAINT; Schema: public; Owner: mimico
--

ALTER TABLE ONLY public.firsttable
    ADD CONSTRAINT firsttable_pkey PRIMARY KEY (id);


--
-- Name: locations locations_pkey; Type: CONSTRAINT; Schema: public; Owner: mimico
--

ALTER TABLE ONLY public.locations
    ADD CONSTRAINT locations_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

