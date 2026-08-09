# U.S. Census Imports API Showcase

[English](README.md) | [Português](README.pt-BR.md)

Uma showcase interativa e bilíngue construída com **690.424 registros de importações dos EUA**, obtidos pela U.S. Census Bureau International Trade API para 2024 e 2025.

**[Abrir o dashboard ao vivo →](https://feliperamon123.github.io/united-states-census-imports-api-showcase/)**

[![Navegação animada pelo dashboard](assets/portfolio/dashboard-scroll.gif)](https://feliperamon123.github.io/united-states-census-imports-api-showcase/)

## O que esta showcase demonstra

A aplicação transforma uma grande extração da API por país e produto em uma experiência estática, rápida e explorável no GitHub Pages. Ela também explica conceitos que são fáceis de confundir, como Importações Gerais, Importações para Consumo, Valor sujeito a tarifa e Direitos calculados.

Você pode:

- explorar 2024 ou 2025;
- pesquisar por SH2, SH4, SH6, HTSUS10 ou descrição do produto;
- filtrar por país fornecedor;
- comparar Importações Gerais, Importações para Consumo, Valor sujeito a tarifa e Direitos calculados;
- ranquear países fornecedores e produtos importados;
- comparar 2025 com 2024;
- alternar toda a interface entre inglês e português.

## Código reutilizável e dados

Esta showcase é uma aplicação do módulo reutilizável da **U.S. Census International Trade API** disponível no [Official Data API Toolkit](https://github.com/FelipeRamon123/official-data-api-toolkit).

Os dados processados usados aqui vêm do exemplo **02 — Todos os países por HTSUS10**:

- [Power Query M](https://github.com/FelipeRamon123/official-data-api-toolkit/blob/main/sources/us-census/power-query/02_all_countries_by_htsus10.m)
- [Python](https://github.com/FelipeRamon123/official-data-api-toolkit/blob/main/sources/us-census/python/02_all_countries_by_htsus10.py)
- [Documentação do módulo U.S. Census](https://github.com/FelipeRamon123/official-data-api-toolkit/tree/main/sources/us-census)
- [Dataset CSV.GZ completo de 2024–2025](https://github.com/FelipeRamon123/united-states-census-imports-api-showcase/releases/latest/download/us-imports-htsus10-country-2024-2025.csv.gz)

O toolkit também contém exemplos de importações por porto, SITC e Rate Provision, além de um exemplo de exportações por país de destino, Schedule B10 e condição doméstica/reexportação.

## Dados e nomenclatura

Os dados de comércio exterior são provenientes da **U.S. Census Bureau International Trade API**.

- Os nomes HTS em inglês usam referências anuais da USITC.
- Os nomes SH2/SH4/SH6 em português usam a nomenclatura oficial brasileira NCM/TIPI.
- HTS8 e HTSUS10 são específicos dos EUA. As adaptações em português nesses níveis são traduções livres assistidas por IA para facilitar a leitura, não nomenclaturas oficiais; o texto em inglês da USITC continua sendo a referência.
- Os direitos calculados presentes nas estatísticas são campos analíticos e não substituem a tarifa legal ou as regras aduaneiras aplicáveis.

## Componentes do projeto

A lógica reutilizável de extração fica no `official-data-api-toolkit`. Este repositório contém a aplicação voltada ao usuário, os dados estáticos processados e o asset para download na Release. O dashboard aponta de volta para o toolkit, para os exemplos exatos em Power Query e Python e para o dataset completo.

## Visualização local

Execute `START_DASHBOARD.bat` no Windows ou `python serve.py` em qualquer plataforma com Python 3 e abra o endereço local mostrado no terminal.

## Licença

O código está disponível sob licença MIT. Os dados continuam sujeitos aos termos e à documentação das fontes oficiais de origem.
