<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PortfolioController extends Controller
{
    /**
     * @Route("/", defaults={"lang": ""}, name="homepage")
     *
     * @Route("/{lang}", name="homepage_user_input_lang")
     *
     */
    public function indexAction($lang)
    {
      $menu = [
        [
          'name' => 'menu.I',
          'src' => 'http://localhost:8000/',
          'sublinks' => [
            [
              'name' => 'dono',
              'src' => 'http://localhost:8000/',
              'sublinks' => [],
            ],
          ],
        ],
        [
          'name' => 'menu.Web',
          'src' => 'http://localhost:8000/',
          'sublinks' => [
            [
              'name' => 'dono',
              'src' => 'http://localhost:8000/',
              'sublinks' => [],
            ],
          ],
        ],
      ];

      return $this->render('portfolio/index.html.twig', [
          'lang' => $lang,
          'links' => $menu,
      ]);
    }
}
