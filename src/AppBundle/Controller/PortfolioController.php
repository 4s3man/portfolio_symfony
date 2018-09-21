<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class PortfolioController extends Controller
{
    /**
     * @Route("/", defaults={"lang": ""}, name="homepage")
     *
     */
    public function indexAction($lang)
    {
      //@Route("/{lang}", name="homepage_user_input_lang")
      $menu = [
        [
          'name' => 'menu.I',
          'id' => 'I',
          'src' => 'http://localhost:8000/',
          'sublinks' => [
            [
              'name' => 'dono',
              'id' => 'IDono',
              'src' => 'http://localhost:8000/',
              'sublinks' => [],
            ],
          ],
        ],
        [
          'name' => 'menu.Web',
          'id' => 'Web',
          'src' => 'http://localhost:8000/',
          'sublinks' => [
            [
              'name' => 'dono',
              'id' => 'WebDono',
              'src' => 'http://localhost:8000/',
              'sublinks' => [],
            ],
          ],
        ],
      ];

      $shalom = [
        'dono' => 'nakurwiamy',
        'sobie' => 'ajaxik',
      ];
      $s = new JsonResponse($shalom);
      dump($s);

      return $this->render('portfolio/index.html.twig', [
          'lang' => $lang,
          'links' => $menu,
      ]);
    }

    /**
     * @Route("/ajaxContent", name="ajaxContent")
     */
    public function ajaxContentCall(Request $request){
      if ($request->isXmlHttpRequest()) {
        $shalom = [
          'title' => 'nakurwiamy',
          'content' => 'ajaxik',
        ];
        $s = new JsonResponse($shalom);
        dump($s);
        return $s;
      }
    }
}
