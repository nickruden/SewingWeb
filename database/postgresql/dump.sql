PGDMP     7    4            	    {         	   sewingweb    15.3    15.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16441 	   sewingweb    DATABASE     }   CREATE DATABASE sewingweb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE sewingweb;
                postgres    false            �            1259    16443    professions    TABLE     7  CREATE TABLE public.professions (
    id integer NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone,
    name character varying(45) NOT NULL,
    average_salary integer NOT NULL,
    "desc" character varying(20) NOT NULL
);
    DROP TABLE public.professions;
       public         heap    postgres    false            �            1259    16442    professions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.professions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.professions_id_seq;
       public          postgres    false    215                        0    0    professions_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.professions_id_seq OWNED BY public.professions.id;
          public          postgres    false    214            e           2604    16446    professions id    DEFAULT     p   ALTER TABLE ONLY public.professions ALTER COLUMN id SET DEFAULT nextval('public.professions_id_seq'::regclass);
 =   ALTER TABLE public.professions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            �          0    16443    professions 
   TABLE DATA           _   COPY public.professions (id, created_at, updated_at, name, average_salary, "desc") FROM stdin;
    public          postgres    false    215   �                  0    0    professions_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.professions_id_seq', 1, true);
          public          postgres    false    214            i           2606    16449    professions professions_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.professions
    ADD CONSTRAINT professions_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.professions DROP CONSTRAINT professions_pkey;
       public            postgres    false    215            g           1259    16450    professions_name_key    INDEX     S   CREATE UNIQUE INDEX professions_name_key ON public.professions USING btree (name);
 (   DROP INDEX public.professions_name_key;
       public            postgres    false    215            �   =   x�3�4202�54�54R02�21�26�33��)~aŅM�^��46  �b������� �8�     